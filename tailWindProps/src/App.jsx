import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let cardObj={
    Name:"Nerfs K7",
    Name2:"Nerfs K12",
    Name3:"Nerfs K9",
    Price1:`$10,00000`,
    Price2:`$12,0000`,
    Price3:`$7,0000`,
  }
  return (
    <>
     <h1 className="bg-red-400  font-bold  p-4 rounded-xl mb-4">My Collection</h1>

      <Card Name={cardObj.Name} Rate={cardObj.Price1}/>
      <Card Name={cardObj.Name2} Rate={cardObj.Price2}/>
      <Card Name={cardObj.Name3} Rate={cardObj.Price3}/>

    </>
  )
}

export default App
