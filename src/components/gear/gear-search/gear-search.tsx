import { memo } from 'react'
import { useGearUpdate } from '@/hooks/use-gear/use-gear-update'

function GearSearchRaw() {
  const { updateGearFilters } = useGearUpdate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateGearFilters({ search: event.target.value })
  }

  return (
    <input
      type='text'
      placeholder='Search...'
      className='w-full max-w-3xl p-1 text-slate-900 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
      onChange={handleChange}
    />
  )
}

export const GearSearch = memo(GearSearchRaw)
