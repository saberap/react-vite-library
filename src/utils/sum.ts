export type ISum = (...params: number[]) => number

export const sum: ISum = (...params) =>
  params.reduce((previusValue, currentValue) => previusValue + currentValue)
