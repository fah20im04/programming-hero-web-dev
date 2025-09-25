
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/bottles'

//const bottlesPromise = fetch('./bottles.json').then(res => res.json());

const bottlesPromise = fetch('bottles.json').then(res => res.json())

function App() {

  // const bootles =[
  //   {id:1,name : 'Pink Nke Bottles', price:'pink'},
  //   {id:1,name : 'Pink Nke Bottles', price:'pink'},
  //   {id:1,name : 'Pink Nke Bottles', price:'pink'},
  //   {id:1,name : 'Pink Nke Bottles', price:'pink'}
  // ]

  return (
    <>
      
      <h1>Buy awesome water bottles</h1>
      <Suspense fallback={<h3>Bottles are loading</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
