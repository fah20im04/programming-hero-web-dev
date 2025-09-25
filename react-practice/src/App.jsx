import './App.css'
import Countries from '../Countries'
import { Suspense } from 'react'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Countries are loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
