import { memo, useCallback } from 'react'
import { useGearData } from '@/hooks/use-gear/use-gear-data'
import { usePurchasesUpdate } from '@/hooks/use-purchases/use-purchases-update'
import { getSingleCost } from './helpers'
import type { Gear } from '@/types'

function GearTableRaw() {
  const gearAvailable = useGearData()
  const { addPurchasedGear } = usePurchasesUpdate()

  const handleAddGear = useCallback(
    (item: Gear) => () => addPurchasedGear(item),
    [addPurchasedGear],
  )

  return (
    <table className='table-auto text-center text-md w-full'>
      <thead>
        <tr className='bg-slate-900 border-b border-slate-800 text-lg sticky top-0'>
          <th className='w-3/4 py-3 px-2 text-left'>Name</th>
          <th className='w-1/8 py-3 px-2'>Cost</th>
          <th className='w-1/8 py-3 px-2'>Slots</th>
        </tr>
      </thead>
      <tbody>
        {gearAvailable.map(gear => (
          <tr
            key={gear.name}
            className='border-b border-slate-900 hover:bg-gray-900 cursor-pointer'
            onClick={handleAddGear(gear)}
          >
            <td className='py-1 px-2 text-left'>{gear.name}</td>
            <td className='py-1 px-2 whitespace-nowrap'>{getSingleCost(gear.cost)}</td>
            <td className='py-1 px-2'>{gear.slots}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const GearTable = memo(GearTableRaw)
