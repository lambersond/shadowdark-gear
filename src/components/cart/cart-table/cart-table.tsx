import { MouseEvent, memo, useCallback } from 'react'
import { usePurchasesUpdate } from '@/hooks/use-purchases/use-purchases-update'
import { getTotalCost } from '../helpers'
import type { PurchasedGear } from '@/types'

type Props = Readonly<{ tData: PurchasedGear[] }>

function CartTableRaw({ tData }: Props) {
  const { removePurchasedGear } = usePurchasesUpdate()

  const handleRemoveGear = useCallback(
    (item: PurchasedGear) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      removePurchasedGear(item)
    },
    [removePurchasedGear],
  )

  return (
    <table className='table-auto text-center text-md w-full'>
      <thead>
        <tr className='bg-slate-900 border-b border-slate-800 text-lg sticky top-0'>
          <th className='w-1/16 py-3 px-2'>#</th>
          <th className='w-7/16 py-3 px-2 text-left'>Name</th>
          <th className='w-3/16 py-3 px-2'>Cost</th>
          <th className='w-1/8 py-3 px-2'>Slots</th>
          <th className='w-3/16 py-3 px-2'>Type</th>
        </tr>
      </thead>
      <tbody>
        {tData.map(gear => (
          <tr
            key={gear.name}
            className='border-b border-slate-900 hover:bg-gray-900 cursor-pointer'
            onClick={handleRemoveGear(gear)}
          >
            <td className='py-1 px-2'>{gear.quantity}x</td>
            <td className='py-1 px-2 text-left'>{gear.name}</td>
            <td className='py-1 px-2 whitespace-nowrap'>{getTotalCost(gear.cost)}</td>
            <td className='py-1 px-2'>{gear.slots}</td>
            <td className='py-1 px-2'>{gear.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const CartTable = memo(CartTableRaw)
