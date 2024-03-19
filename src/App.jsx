import { useState } from 'react'

import './App.css'

function App() {
 let  [color ,setColor] =useState("blue")
  return (
    <>
    <main className='main'style={{backgroundColor:color}}>
<div className='container'>
<button className='color' id="red" onClick={()=>{setColor("red")}}>red</button>
<button className='color' id="violet"  onClick={()=>{setColor("violet")}} >violet</button>
<button className='color' id ="green" onClick={()=>{setColor("green")}} >green</button>
<button className='color' id="blue"  onClick={()=>{setColor("blue")}} >blue</button>
<button className='color' id="yellow"  onClick={()=>{setColor("yellow")}} >yellow</button>
<button className='color' id="orange" onClick={()=>{setColor("orange")}} >orange</button>
<button className='color' id="aqua"  onClick={()=>{setColor("aqua")}}>aqua</button>

</div>
    </main>
    </>
  )
}

export default App
