import LZString from 'lz-string'
import { describe, expect, it, vi } from 'vitest'
import { createDefaultCharacter } from '../types/character'
import { exportCharacter, importCharacterFromFile } from './useCharacterIO'

vi.mock('file-saver', () => ({ saveAs: vi.fn() }))

import { saveAs } from 'file-saver'

describe('exportCharacter', () => {
  it('compresses the character with lz-string and saves it under the given filename', async () => {
    const char = createDefaultCharacter()
    char.handle = 'Rogue'

    exportCharacter(char, 'rogue.txt')

    expect(saveAs).toHaveBeenCalledOnce()
    const [blob, filename] = vi.mocked(saveAs).mock.calls[0]
    expect(filename).toBe('rogue.txt')

    const text = await (blob as Blob).text()
    const json = LZString.decompressFromUTF16(text)
    expect(JSON.parse(json as string)).toEqual(char)
  })
})

describe('importCharacterFromFile', () => {
  it('round-trips an exported character exactly', async () => {
    const char = createDefaultCharacter()
    char.handle = 'Nomad'
    char.role = 4
    const compressed = LZString.compressToUTF16(JSON.stringify(char))
    const file = new File([compressed], 'char.txt', { type: 'text/plain' })

    const result = await importCharacterFromFile(file)

    expect(result).toEqual(char)
  })

  it('rejects a file whose contents cannot be decoded as lz-string', async () => {
    const file = new File(['definitely not lz-string compressed data'], 'bad.txt')
    await expect(importCharacterFromFile(file)).rejects.toThrow()
  })

  it('rejects a file whose decompressed content is not valid JSON', async () => {
    const compressed = LZString.compressToUTF16('not json {{{')
    const file = new File([compressed], 'bad-json.txt')
    await expect(importCharacterFromFile(file)).rejects.toThrow()
  })

  it('rejects a file with valid JSON that is not a valid character shape', async () => {
    const compressed = LZString.compressToUTF16(JSON.stringify({ foo: 'bar' }))
    const file = new File([compressed], 'bad-shape.txt')
    await expect(importCharacterFromFile(file)).rejects.toThrow()
  })
})
