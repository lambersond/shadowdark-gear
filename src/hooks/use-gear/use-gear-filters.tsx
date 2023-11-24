import { useContext } from 'react'
import { GearFiltersCtx } from './constants'

export const useGearFilters = () => useContext(GearFiltersCtx)
