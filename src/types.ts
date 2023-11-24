export type GearType = 'weapon' | 'armor' | 'basic'
export type GearSlot = 0 | 1 | 2 | 3
export type GearFilters = Record<GearType, boolean> & {
  search: string
}

export interface Gear {
  name: string
  cost: number
  slots: GearSlot
  type: GearType
}

export interface PurchasedGear extends Gear {
  quantity: number
}
