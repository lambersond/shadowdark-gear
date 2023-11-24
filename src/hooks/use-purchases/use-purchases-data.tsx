import { useContext } from 'react'
import { PurchasedCtxData } from './constants'

export const usePurchasesData = () => useContext(PurchasedCtxData)
