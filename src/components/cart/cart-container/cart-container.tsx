import { memo } from 'react'
import { usePurchasesData } from '@/hooks/use-purchases/use-purchases-data'
import { CartTable } from '../cart-table'
import { getTotalCost } from '../helpers'

function CartContainerRaw() {
  const items = usePurchasesData()

  const { totalCost, totalSlots } = items.reduce(
    (acc, item) => ({
      totalCost: acc.totalCost + item.cost,
      totalSlots: acc.totalSlots + item.slots,
    }),
    { totalCost: 0, totalSlots: 0 },
  )

  return (
    <div className='w-full max-w-3xl'>
      <p className='text-white font-bold text-2xl pb-3'>Purchased Gear</p>
      <p className='text-white text-lg pb-3'>
        {totalSlots} Slots, {getTotalCost(totalCost)}
      </p>
      <div className='rounded-t-lg overflow-hidden'>
        <CartTable tData={items} />
      </div>
    </div>
  )
}

export const CartContainer = memo(CartContainerRaw)
