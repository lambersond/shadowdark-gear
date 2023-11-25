import { memo } from 'react'
import type { IconProps } from './types'

function CoinBagIconRaw({ color = 'white', className }: IconProps) {
  return (
    <svg
      width={32}
      height={32}
      stroke={color}
      strokeWidth={2}
      className={className}
      viewBox='0 0 36 36'
      fill='none'
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        d='M24.89,26h7.86c-.66-8.71-4.41-14.12-9.22-17.32L25.72,3.9a1,1,0,0,0-.91-1.4H11.1a1,1,0,0,0-.91,1.4l1.2,2.6H21.51l-.9,2H18.76A24.9,24.9,0,0,1,20,13.19a24.49,24.49,0,0,1,.32,3l-1.58,1.11a22.54,22.54,0,0,0-.32-3.86A21.74,21.74,0,0,0,17,8.5h-1a28.22,28.22,0,0,0-2.48,3.7,23.91,23.91,0,0,0-1.49,3.46l-1.37-.91a22.78,22.78,0,0,1,1.47-3.34A30.81,30.81,0,0,1,14.05,8.5H12.3l.08.17C7.08,12.2,3.05,18.4,3.05,28.75A1.65,1.65,0,0,0,4.61,30.5h8A2.67,2.67,0,0,1,14.21,26a2.67,2.67,0,0,1-.37-1.34,2.7,2.7,0,0,1,2.7-2.7h6a2.7,2.7,0,0,1,2.7,2.7A2.63,2.63,0,0,1,24.89,26Z'
        className='clr-i-solid clr-i-solid-path-1'
      />
      <path
        d='M21.6,28.5a1,1,0,0,0-1-1h-6a1,1,0,0,0,0,2h6A1,1,0,0,0,21.6,28.5Z'
        className='clr-i-solid clr-i-solid-path-2'
      />
      <path
        d='M22.54,23.5h-6a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
        className='clr-i-solid clr-i-solid-path-3'
      />
      <path
        d='M22,31.5H16a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
        className='clr-i-solid clr-i-solid-path-4'
      />
      <path
        d='M32.7,31.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z'
        className='clr-i-solid clr-i-solid-path-5'
      />
      <path
        d='M33.7,27.5h-7a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Z'
        className='clr-i-solid clr-i-solid-path-6'
      />
    </svg>
  )
}

export const CoinBagIcon = memo(CoinBagIconRaw)