import React from 'react'
import './Home.css'
import Shashana from './comTatoo/Tatoos.module'
import Rideside from './Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Contact from './comTatoo/Contact/Contacts'

function Home() {
  // function incriment() {
  //   setCounter(counter +1)
  // }
  // function decriment() {
  //   setCounter(counter -1)
  // }
  return (
    <div className='Overr'>
      <div className='Notover'>
        </div>
        <h1> Tatoo LION</h1>
        <div className='Golova'>
         <div className='Content'>
          <Routes>
            <Route path='/Works' element={<Shashana />}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
         </div>
         <div className='Header'>
            <Rideside />
        </div>

      </div>
      </div>
   
  )
}

export default Home