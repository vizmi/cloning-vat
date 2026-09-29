export function calculateRun(ma: number): number {
  return ma * 3
}

export function calculateLeap(run: number): number {
  return run / 4
}

export function calculateLift(body: number): number {
  return body * 40
}

export function calculateBtm(body: number): number {
  if (body <= 2) return 0
  if (body <= 4) return -1
  if (body <= 7) return -2
  if (body <= 9) return -3
  return -4
}
