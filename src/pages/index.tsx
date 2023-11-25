import { Inter } from 'next/font/google'
import { CartContainer } from '@/components/cart/cart-container'
import { CartInfo } from '@/components/cart/cart-info'
import { MobileDrawer } from '@/components/common/mobile-drawer'
import { GearContainer } from '@/components/gear/gear-container'
import { PurchasesProvider } from '@/hooks/use-purchases/purchases-provider'

const inter = Inter({ subsets: ['latin'] })
const classNames =
  'flex min-h-screen flex-col md:flex-row gap-3 py-8 bg-gray-800 px-2 md:justify-around'

export default function Home() {
  return (
    <main className={`${classNames} ${inter.className}`}>
      <PurchasesProvider>
        <GearContainer />
        <div className='hidden md:contents'>
          <CartContainer showInfo />
        </div>
        <MobileDrawer title='Purchased Gear' headerItems={<CartInfo />}>
          <CartContainer />
        </MobileDrawer>
      </PurchasesProvider>
    </main>
  )
}
