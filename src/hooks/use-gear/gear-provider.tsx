import { useMemo, useState, type ReactNode } from 'react'
import { GearCtxData, GearCtxUpdate, GearFiltersCtx, baseGear, defaultFilters } from './constants'
import type { Gear, GearFilters } from '@/types'

export const GearProvider = ({ children }: { children: ReactNode }) => {
  const [gear, setGear] = useState<Gear[]>(baseGear)
  const [filters, setFilters] = useState<GearFilters>(defaultFilters)

  const gearValue = useMemo(() => gear, [gear])
  const filtersValue = useMemo(() => filters, [filters])
  const settersValue = useMemo(() => ({ setGear, setFilters }), [])

  return (
    <GearCtxUpdate.Provider value={settersValue}>
      <GearFiltersCtx.Provider value={filtersValue}>
        <GearCtxData.Provider value={gearValue}>{children}</GearCtxData.Provider>
      </GearFiltersCtx.Provider>
    </GearCtxUpdate.Provider>
  )
}
