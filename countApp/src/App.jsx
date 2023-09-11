import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let  [Counter,setCounter]=useState(0)

    //let Counter=12
    const addValue=()=>{
     //Counter = Counter + 1
     if(Counter<20){
     setCounter(Counter+1)
     }
    }
    const removeVlaue=()=>{
        if(Counter>0){
        setCounter(Counter-1)
        }
    }
 return(
<>
    <h1>Its My App Babe</h1>
    <h2>Counter Value:{Counter}</h2>
    
    <button onClick={addValue}>Add Count:{Counter}</button>
    <button onClick={removeVlaue}>Subs Count:{Counter}</button>
    <p>our:{Counter}</p>

    </>
 )
}

export default App
