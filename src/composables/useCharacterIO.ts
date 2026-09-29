import { saveAs } from 'file-saver'
import LZString from 'lz-string'
import type { Character } from '../types/character'
import { isCharacter } from '../types/character'

export function exportCharacter(char: Character, filename: string): void {
  const json = JSON.stringify(char)
  const compressed = LZString.compressToUTF16(json)
  const blob = new Blob([compressed], { type: 'text/plain;charset=utf-16' })
  saveAs(blob, filename)
}

export function importCharacterFromFile(file: File): Promise<Character> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('loadend', () => {
      const compressed = reader.result
      if (typeof compressed !== 'string') {
        reject(new Error('File could not be read as text'))
        return
      }

      const json = LZString.decompressFromUTF16(compressed)
      if (json === null) {
        reject(new Error('File cannot be decoded — it may not be a valid character export'))
        return
      }

      let parsed: unknown
      try {
        parsed = JSON.parse(json)
      } catch {
        reject(new Error('File contents are not valid character data'))
        return
      }

      if (!isCharacter(parsed)) {
        reject(new Error('File does not contain a valid character'))
        return
      }

      resolve(parsed)
    })

    reader.addEventListener('error', () => {
      reject(new Error('Failed to read file'))
    })

    reader.readAsText(file)
  })
}
