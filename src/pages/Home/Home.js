import React from 'react'
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import RightPanel from '../../components/RightPanel/RightPanel'

const Home = () => {
  return (
    <>
     <div className='container'>
      <Sidebar/>
      <RightPanel/>
     </div> 
    </>
  )
}

export default Home
