import React from 'react'
import useStore from '../store/useStore'

export default function Counter() {
  const count = useStore((s) => s.count)
  const inc = useStore((s) => s.increment)
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <span style={{ marginLeft: 8 }}>Count: {count}</span>
    </div>
  )
}
