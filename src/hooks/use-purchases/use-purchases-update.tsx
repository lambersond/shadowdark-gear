import { useCallback, useContext } from 'react'
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
              return { ...gear, quantity: gear.quantity + 1, cost: gear.cost + newGear.cost }
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
    (gearToRemove: Gear) => {
      setPurchasedGear(purchasedGear => {
        const itemToRemove = purchasedGear.find(gear => gear.name === gearToRemove.name) || {
          quantity: 0,
        }

        if (itemToRemove?.quantity > 1) {
          return [...purchasedGear].map(gear => {
            if (gear.name === gearToRemove.name) {
              return { ...gear, quantity: gear.quantity - 1, cost: gear.cost - gearToRemove.cost }
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
