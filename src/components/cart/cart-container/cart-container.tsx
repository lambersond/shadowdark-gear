import { memo } from 'react'
import { usePurchasesData } from '@/hooks/use-purchases/use-purchases-data'
import { CartInfo } from '../cart-info'
import { CartTable } from '../cart-table'

type Props = Readonly<{
  showInfo?: boolean
}>

function CartContainerRaw({ showInfo = false }: Props) {
  const items = usePurchasesData()

  return (
    <div className='w-full max-w-3xl'>
      <p className='text-white font-bold text-2xl pb-3 hidden md:block'>Purchased Gear</p>
      {showInfo && (
        <div className='pb-3'>
          <CartInfo />
        </div>
      )}
      <div className='rounded-t-lg overflow-hidden'>
        <CartTable tData={items} />
      </div>
    </div>
  )
}

export const CartContainer = memo(CartContainerRaw)
