import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff, mult,divide as div } from './utils/math/math'

function App() {
  const sum = add(2,3)
  const subs = diff(12,8)
  const gunfol = mult(5,6)
  const divide = 15/8;
  const vag = div(30,10)
  console.log(vag)
  console.log(gunfol)

  console.log(subs)
  console.log(sum)
  return (
    <>
      
      <h1>Vite + React</h1>
      
      
    </>
  )
}

export default App
