import { memo } from 'react'
import { GearTable } from '../gear-table'

export function GearTableContainerRaw() {
  return (
    <div className='overflow-hidden scroll-smooth overscroll-y-auto w-full max-w-3xl rounded-t-lg max-h-[calc(100vh_-_226px)] md:max-h-[calc(100vh_-_190px)]'>
      <GearTable />
    </div>
  )
}

export const GearTableContainer = memo(GearTableContainerRaw)
