const BritishPound = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
})

export const formatPrice = (value: number) => {
  return BritishPound.format(value)
}

export const getAverage = (arr: number[]) => {
  const reducer = (total: number, currentValue: number) => total + currentValue
  const sum = arr.reduce(reducer, 0)
  return sum / arr.length
}
