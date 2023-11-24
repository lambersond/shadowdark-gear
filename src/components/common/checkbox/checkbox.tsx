import { type ChangeEventHandler, memo } from 'react'

type CheckboxProps = Readonly<{
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
}>

function CheckboxRaw({ checked, onChange, label }: CheckboxProps) {
  return (
    <label className='text-white inline-flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
      />
      <span className='ml-2'>{label}</span>
    </label>
  )
}

export const Checkbox = memo(CheckboxRaw)
