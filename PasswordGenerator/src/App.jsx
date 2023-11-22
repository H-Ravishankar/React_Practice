import { useCallback, useState } from 'react'
import './App.css'

function App() {
 const [length, setLength] = useState(6)
 const [number, setNumber] = useState(false)
 const [character, setCharacter] = useState(false)
 const [password, setPassword] = useState('')
  
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*(){}[]"

    for(let i =  1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }
    setPassword(pass)
  })
  const copyPassword = ()=>{

  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500 p-10'>
              <h1 className='text-white text-center pb-7'>Password Generator</h1>
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
               <input 
               type="text"
               value={password}
               placeholder='Password'
               readOnly
               className='outline-none w-full py-1 px3'
              
               />
                

                <button 
                onClick={copyPassword}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>Copy</button>

              </div>
              <div className='flex text-5m gap-x-2'>

                <div className='flex items-center gap-x-1'> 

                <input 
                type="range" 
                min={6}
                max={101}
                value={length}
                className='cursor-pointer'
                onClick={(e)=>{setLength(e.target.value)}}
                 
                />

                <label >Lengh: {length}</label>

               
                </div>
                  <div className='flex items-center   gap-x-1'>
                    <input 
                    type="checkbox" 
                    defaultChecked = {number} 
                    id="numberInput" 
                    onChange={()=>{setNumber((prev)=> !prev)
                    }}
                    />
                    

                 
                  <label htmlFor="numberInput">Numbers</label>
                </div>
                  <div className='flex items-center gap-x-1'>
                  
                  
                  <label htmlFor="charInput"> Characters</label>
                </div>

              </div>
            </div>

    </>
  )
}

export default App
