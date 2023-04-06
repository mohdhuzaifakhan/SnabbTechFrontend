import './index.css';
import React from 'react'
import Sidebar from './component/Sidebar'
import  MainContainer from './component/MainContainer'
import Navbar from './component/Navbar'
function Home() {
  return (
    <div>
       <Navbar/>
       <Sidebar/>
       <MainContainer/>
    </div>
  )
}

export default Home
