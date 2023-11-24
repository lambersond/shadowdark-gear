export const getTotalCost = (cost: number) => {
  if (cost === 0) return 'Free'
  const copper = cost % 10
  const silver = Math.trunc(cost / 10) % 10
  const gold = Math.trunc(cost / 100)

  const result = []
  !!gold && result.push(`${gold} gp`)
  !!silver && result.push(`${silver} sp`)
  !!copper && result.push(`${copper} cp`)

  return result.join(', ')
}
