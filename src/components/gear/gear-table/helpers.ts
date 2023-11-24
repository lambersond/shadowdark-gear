export const getSingleCost = (cost: number) => {
  if (cost === 0) return 'Free'
  if (cost < 10) {
    return `${cost} cp`
  } else if (cost < 100) {
    return `${cost / 10} sp`
  } else {
    return `${cost / 100} gp`
  }
}
