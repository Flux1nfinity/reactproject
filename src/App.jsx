import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <>
          <Navbar />
          <div className='flex-center marginY-5'>
            <h1 className='pastel-red'>DESIGN</h1>
              <h1 className='light-grey'>ELEMENTS</h1>
          </div>

          <form action="./src/CreateAccount.html">
              <button className='border-none color-white size-28 margin-4'>Enter</button>
          </form>


          <span id='perspective-180' className='flex-center translateY-2'>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
              <span className='width-1 height-10 bg-light-grey marginX-5' id='perspective-transform'></span>
          </span>
          <div className='width-100 height-1 bg-light-grey translateY-16'></div>
          <div className='width-100 height-2 bg-light-grey translateY-4'></div>
    </>
  )
}

export default App
