import { memo } from 'react'
import { GearFilters } from '@/components/gear/gear-filters/gear-filters'
import { GearSearch } from '@/components/gear/gear-search'
import { GearProvider } from '@/hooks/use-gear/gear-provider'
import { GearTableContainer } from '../gear-table-container'

function GearContainerRaw() {
  return (
    <GearProvider>
      <div className='flex flex-col gap-2 w-full max-w-3xl'>
        <p className='text-white font-bold text-2xl pb-3'>Purchase Gear</p>
        <GearSearch />
        <GearFilters />
        <GearTableContainer height='calc(100vh - 190px)' />
      </div>
    </GearProvider>
  )
}

export const GearContainer = memo(GearContainerRaw)
