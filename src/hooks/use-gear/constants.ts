import { createContext } from 'react'
import { baseBasics, baseArmors, baseWeapons } from '@/constants'
import type { Gear, GearFilters } from '@/types'

export const baseGear = [...baseBasics, ...baseArmors, ...baseWeapons]
export const defaultFilters: GearFilters = {
  basic: true,
  armor: true,
  weapon: true,
  search: '',
}

export const GearFiltersCtx = createContext<GearFilters>(defaultFilters)
export const GearCtxData = createContext<Gear[]>([])
export const GearCtxUpdate = createContext<{
  setGear: React.Dispatch<React.SetStateAction<Gear[]>>
  setFilters: React.Dispatch<React.SetStateAction<GearFilters>>
}>({
  setGear: () => baseGear,
  setFilters: () => defaultFilters,
})
