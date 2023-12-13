import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ArcodionHeaderType {
  text: string
  icon: ReactNode
  dropDown: ReactNode
  toggleModal: () => void
  isNew: boolean
}

export default function ArcodionHeader({ text, icon, dropDown, toggleModal, isNew }: ArcodionHeaderType) {
  return (
    <section className="flex justify-between h-[30px] shrink-0 " onClick={toggleModal}>
      <div className="flex items-center l-bold-18 text-gray900 tracking-[-0.5px] gap-[8px] ">
        <span className="shrink-0">{icon}</span>
        <span>{text}</span>
        {isNew && <Image src="new.svg" alt="new" width={24} height={24} />}
      </div>
      {dropDown}
    </section>
  )
}
