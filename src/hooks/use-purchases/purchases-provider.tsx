import { useMemo, useState, type ReactNode } from 'react'
import { PurchasedCtxData, PurchasedCtxSetter } from './constants'
import type { PurchasedGear } from '@/types'

export const PurchasesProvider = ({ children }: { children: ReactNode }) => {
  const [purchasedGear, setPurchasedGear] = useState<PurchasedGear[]>([])

  const purchasedGearValue = useMemo(() => purchasedGear, [purchasedGear])

  return (
    <PurchasedCtxSetter.Provider value={setPurchasedGear}>
      <PurchasedCtxData.Provider value={purchasedGearValue}>{children}</PurchasedCtxData.Provider>
    </PurchasedCtxSetter.Provider>
  )
}
