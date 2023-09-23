import { useState, useCallback,useEffect,useRef } from 'react'
import "./App.css"


function App() {
  const [Length, setLength] = useState(8)
  const [numAllowed,setnumAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [passWgen,setpassWgen]=useState("")
//useCallback
const PassWordGenerator=useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*(){}[]_-+=~`"
  for (let i = 1; i <= Length; i++) { 
    const char=Math.floor(Math.random()*str.length + 1)
  pass += str.charAt(char)    
  }
  setpassWgen(pass)

},[Length,numAllowed,charAllowed,setpassWgen])

//useRef
const passRef = useRef(null)

const copytoClip=useCallback(()=>{
  passRef.current?.select()
  passRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(passWgen)
},[passWgen])

useEffect(()=>{
  PassWordGenerator()
},[Length,numAllowed,charAllowed,setpassWgen])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className='text-3xl text-center text-green-500 my-3'>PassWord GeneRator</h1>
      <div className="flex shadow rounded-xl overflow-hidden mb-4">
        <input type="text" 
        value={passWgen}
        className='outline-none w-screen py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passRef}
        />
        <button  onClick={copytoClip} className='outline-none bg-black text-green-500 px-3 py-0.5 mx-1 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={8}
            max={16}
            value={Length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{Length}</label>
        </div>
        <div className="flex text-center gap-x-1">
          <input type="checkbox" 
                 defaultChecked={numAllowed}
                 id='numInput'
                 onChange={()=>{
                  setnumAllowed((prev)=> !prev)
                 }} 
          />
          <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex text-center gap-x-1">
          <input type="checkbox" 
                 defaultChecked={charAllowed}
                 id='charInput'
                 onChange={()=>{
                  setcharAllowed((prev)=> !prev)
                 }} 
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
