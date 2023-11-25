import { useState } from 'react'
import { Inter } from 'next/font/google'
import { CartContainer } from '@/components/cart/cart-container'
import { GearContainer } from '@/components/gear/gear-container'
import { PurchasesProvider } from '@/hooks/use-purchases/purchases-provider'

const inter = Inter({ subsets: ['latin'] })
const classNames =
  'flex min-h-screen flex-col md:flex-row gap-3 py-8 bg-gray-800 px-2 md:justify-around'

const drawerClassNames =
  'md:hidden overflow-hidden fixed bottom-0 left-0 right-0 w-full bg-slate-800 cursor-pointer transition-all duration-300 ease-in-out z-50'

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <main className={`${classNames} ${inter.className}`}>
      <PurchasesProvider>
        <GearContainer />
        <div className='hidden md:contents'>
          <CartContainer />
        </div>
        <div
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className={`${
            isDrawerOpen ? 'h-full hover:h-full' : 'h-[69px] hover:h-[74px] rounded-t-lg'
          } ${drawerClassNames}`}
        >
          <div
            className={`px-4 py-5 border-b bg-slate-950 ${
              isDrawerOpen ? 'border-slate-700' : 'border-transparent'
            }`}
          >
            <h2 className='font-semibold text-lg'>Purchased Gear</h2>
          </div>
          <CartContainer />
        </div>
      </PurchasesProvider>
    </main>
  )
}
