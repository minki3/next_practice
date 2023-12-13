import React, { ReactNode } from 'react'

interface LargeButtonType {
  text?: string
  type?: 'primary' | 'secondary' | 'white'
  align?: 'left' | 'right'
  fulllWidth?: boolean
  icon?: ReactNode
  secondIcon?: ReactNode
  disabled?: boolean
}

export default function LargeButton({
  text,
  type = 'primary',
  align = 'left',
  fulllWidth = false,
  icon,
  secondIcon,
  disabled = false,
}: LargeButtonType) {
  const primary = 'bg-purple400 text-white hover:bg-purple500'
  const secondary =
    'bg-white border border-solid border-purple400 text-purple400 hover:bg-purple200 disabled:border-none'

  const buttonColor = (type: string) => {
    switch (type) {
      case 'primary':
        return `${primary}`
      case 'secondary':
        return `${secondary}`
      case 'white':
        throw new Error(`no color : ${type}`)
    }
  }
  const alignButton = (align: string) => {
    switch (align) {
      case 'left':
        return ''
      case 'right':
        return 'flex-row-reverse'
    }
  }
  const fullWidthButton = `${
    fulllWidth ? `w-full ${icon && text ? 'justify-between' : 'justify-center'}` : `justify-center`
  }`
  return (
    <button
      className={`${buttonColor(type)} ${
        icon && icon ? 'gap-[12px]' : ''
      }  flex disabled:bg-gray200 disabled:text-gray500 items-center l-medium-16 rounded-xl py-[14px] px-[16px] ${alignButton(
        align,
      )} ${fullWidthButton}`}
      disabled={disabled}
    >
      {secondIcon && secondIcon ? (
        <div className="flex items-center gap-[12px]">
          {icon && icon}
          {text}
        </div>
      ) : (
        <>
          <span> {icon && icon}</span>
          <span> {text}</span>
        </>
      )}
      {secondIcon && secondIcon}
    </button>
  )
}
