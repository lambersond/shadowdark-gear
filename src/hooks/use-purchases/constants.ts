import { type Dispatch, type SetStateAction, createContext } from 'react'
import type { PurchasedGear } from '@/types'

export const PurchasedCtxData = createContext<PurchasedGear[]>([])
export const PurchasedCtxSetter = createContext<Dispatch<SetStateAction<PurchasedGear[]>>>(() => [])
