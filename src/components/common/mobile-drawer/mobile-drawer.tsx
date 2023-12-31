import { memo, useCallback, useState } from 'react'

const drawerClassNames =
  'md:hidden overflow-hidden fixed bottom-0 left-0 right-0 w-full bg-slate-800 cursor-pointer transition-all duration-300 ease-in-out z-50'

type Props = Readonly<{
  children: React.ReactNode
  title: string
  headerItems?: React.ReactNode
}>

function MobileDrawerRaw({ children, title, headerItems }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div
      onClick={onClick}
      className={`${
        isOpen ? 'h-full hover:h-full' : 'h-17 hover:h-18 rounded-t-lg'
      } ${drawerClassNames}`}
    >
      <div
        className={`flex items-center px-4 h-17 border-b bg-slate-950 ${
          isOpen ? 'border-slate-700' : 'border-transparent hover:h-18'
        }`}
      >
        <h2 className='font-semibold text-base'>{title}</h2>
        {headerItems}
      </div>
      {children}
    </div>
  )
}

export const MobileDrawer = memo(MobileDrawerRaw)
