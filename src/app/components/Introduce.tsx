'use client'
import { decrement, increment, reset } from '@/lib/features/counter/counter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
export default function Introduce() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <nav className="">
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
    </nav>
  )
}
