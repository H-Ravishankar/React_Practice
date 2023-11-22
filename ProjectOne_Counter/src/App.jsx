import { useState } from 'react'
import './App.css'

function App() {
const[color, setColor] = useState('black')
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex-wrap justify-center inset-x-0 px-2 mt-10 m-5'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl'>

            <button 
            onClick={()=>{
              setColor('red')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "red"}}
            >Red</button>
            <button 
            onClick={()=>{
              setColor('green')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "green"}}
            >Green</button>
            <button 
             onClick={()=>{
              setColor('blue')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
             onClick={()=>{
              setColor('purple')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "purple"}}
            >Purple</button>
            <button 
             onClick={()=>{
              setColor('yellow')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button 
             onClick={()=>{
              setColor('pink')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "pink"}}
            >Pink</button>
            <button 
             onClick={()=>{
              setColor('violet')
            }}
            className='outline-none px-4 py-1 rounded-full shadow-xl text-white'
            style={{backgroundColor: "violet"}}
            >Violet</button>
          </div>

             
        </div>
       
      </div>
    </>
  )
}

export default App
