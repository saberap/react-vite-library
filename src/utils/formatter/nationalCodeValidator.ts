import { chunk } from './chunk'
import { INationlCodeVlidator } from './types'


export const nationlCodeValidator: INationlCodeVlidator = (nationalCode) => {
  if (!nationalCode || nationalCode.length != 10) return false

  if (
    nationalCode == '0000000000' ||
    nationalCode == '1111111111' ||
    nationalCode == '2222222222' ||
    nationalCode == '3333333333' ||
    nationalCode == '4444444444' ||
    nationalCode == '5555555555' ||
    nationalCode == '6666666666' ||
    nationalCode == '7777777777' ||
    nationalCode == '8888888888' ||
    nationalCode == '9999999999'
  )
    return false

  const parts = chunk(nationalCode, 1)
  if (parts !== null) {
    let sum = 0
    for (let i = 0; i < 9; i++) {
      try {
        const element = parseInt(parts[i])
        sum += element * (10 - i)
      } catch {
        return false
      }
    }

    const rem = sum % 11
    const crc = parseInt(parts[9])

    return rem < 2 ? rem === crc : rem + crc === 11
  } else return false
}