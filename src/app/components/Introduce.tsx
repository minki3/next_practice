'use client'
import { decrement, increment, incrementByAmount, reset } from '@/lib/features/counter/counter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
export default function Introduce() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <nav
      className=""
      onMouseEnter={() => {
        console.log('1')
      }}
      onMouseLeave={() => {
        console.log('2')
      }}
    >
      {count}
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset())
        }}
      >
        초기화
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3))
        }}
      >
        fdsafdsf
      </button>
    </nav>
  )
}
