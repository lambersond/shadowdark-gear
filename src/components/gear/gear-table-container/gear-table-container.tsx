import { memo } from 'react'
import { GearTable } from '../gear-table'

type Props = Readonly<{ height: string }>

export function GearTableContainerRaw({ height }: Props) {
  return (
    <div
      style={{ maxHeight: height }}
      className='overflow-hidden overflow-y-scroll scroll-smooth overscroll-y-auto w-full max-w-3xl rounded-t-lg'
    >
      <GearTable />
    </div>
  )
}

export const GearTableContainer = memo(GearTableContainerRaw)
