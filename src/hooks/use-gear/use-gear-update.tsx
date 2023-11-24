import { useCallback, useContext } from 'react'
import { GearCtxUpdate, baseGear } from './constants'
import type { GearFilters } from '@/types'

export const useGearUpdate = () => {
  const { setGear, setFilters } = useContext(GearCtxUpdate)

  const updateGearFilters = useCallback(
    (newFilters: Partial<GearFilters>) => {
      setFilters(prev => {
        const updatedFilters = { ...prev, ...newFilters }

        setGear(() =>
          baseGear.filter(
            g =>
              g.name.toLowerCase().includes(updatedFilters.search.toLowerCase()) &&
              updatedFilters[g.type],
          ),
        )

        return updatedFilters
      })
    },
    [setFilters, setGear],
  )

  return { updateGearFilters }
}
