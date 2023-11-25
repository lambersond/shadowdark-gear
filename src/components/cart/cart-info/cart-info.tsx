import { memo } from 'react'
import { BackpackIcon } from '@/components/common/icons/backpack-icon'
import { CoinBagIcon } from '@/components/common/icons/coin-bag-icon'
import { usePurchasesData } from '@/hooks/use-purchases/use-purchases-data'
import { getTotalCost } from '../helpers'

function CartInfoRaw() {
  const items = usePurchasesData()

  const { totalCost, totalSlots } = items.reduce(
    (acc, item) => ({
      totalCost: acc.totalCost + item.cost,
      totalSlots: acc.totalSlots + item.slots,
    }),
    { totalCost: 0, totalSlots: 0 },
  )

  return (
    <span className='flex justify-start items-center ml-auto gap-2 text-white font-bold text-lg pb-3'>
      <p className='flex'>{totalSlots}</p>
      <BackpackIcon className='block md:hidden' />
      <p className='hidden md:block'>Slots,</p>
      <p>{getTotalCost(totalCost)}</p>
      <CoinBagIcon className='block md:hidden' />
    </span>
  )
}

export const CartInfo = memo(CartInfoRaw)
