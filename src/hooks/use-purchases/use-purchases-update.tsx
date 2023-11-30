import { useCallback, useContext } from 'react'
import { baseGear } from '@/constants'
import { PurchasedCtxSetter } from './constants'
import type { Gear, PurchasedGear } from '@/types'

export const usePurchasesUpdate = () => {
  const setPurchasedGear = useContext(PurchasedCtxSetter)

  const addPurchasedGear = useCallback(
    (newGear: Gear) => {
      setPurchasedGear(purchasedGear => {
        const alreadyPurchased = purchasedGear.find(gear => gear.name === newGear.name)

        if (alreadyPurchased) {
          return [...purchasedGear].map(gear => {
            if (gear.name === newGear.name) {
              return {
                ...gear,
                quantity: gear.quantity + 1,
                cost: gear.cost + newGear.cost,
                slots: gear.slots + newGear.slots,
              } as PurchasedGear
            }

            return gear
          })
        }

        const newPurchasedGear: PurchasedGear = {
          ...newGear,
          quantity: 1,
        }

        return [...purchasedGear, newPurchasedGear]
      })
    },
    [setPurchasedGear],
  )

  const removePurchasedGear = useCallback(
    (gearToRemove: PurchasedGear) => {
      setPurchasedGear(purchasedGear => {
        const itemToRemove = baseGear.find(gear => gear.name === gearToRemove.name) as Gear

        if (gearToRemove?.quantity > 1) {
          return [...purchasedGear].map(gear => {
            if (gear.name === itemToRemove.name) {
              return {
                ...gear,
                quantity: gear.quantity - 1,
                cost: gear.cost - itemToRemove.cost,
                slots: gear.slots - itemToRemove.slots,
              } as PurchasedGear
            }

            return gear
          })
        }
        return [...purchasedGear].filter(gear => gear.name !== gearToRemove.name)
      })
    },
    [setPurchasedGear],
  )

  return { addPurchasedGear, removePurchasedGear }
}
