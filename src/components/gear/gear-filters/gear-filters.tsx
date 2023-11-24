import { ChangeEvent, memo, useCallback } from 'react'
import { useGearFilters } from '@/hooks/use-gear/use-gear-filters'
import { useGearUpdate } from '@/hooks/use-gear/use-gear-update'
import { Checkbox } from '../../common/checkbox'
import type { GearFilters as GearFiltersType } from '@/types'

function GearFiltersRaw() {
  const filters = useGearFilters()
  const { updateGearFilters } = useGearUpdate()

  const updateToggleFilter = useCallback(
    (toggledFilter: keyof GearFiltersType) => (event: ChangeEvent<HTMLInputElement>) => {
      updateGearFilters({ [toggledFilter]: event.target.checked })
    },
    [updateGearFilters],
  )

  return (
    <div className='inline-flex items-center gap-3'>
      <p className='text-white font-bold'>Filters:</p>
      <Checkbox label='Basic' checked={filters.basic} onChange={updateToggleFilter('basic')} />
      <Checkbox label='Armor' checked={filters.armor} onChange={updateToggleFilter('armor')} />
      <Checkbox label='Weapons' checked={filters.weapon} onChange={updateToggleFilter('weapon')} />
    </div>
  )
}

export const GearFilters = memo(GearFiltersRaw)
