import React from 'react'
import img1 from "../assets/homeimg.jpg"
import '../styles/header.scss'

const Home = () => {
  return (
    <div className='hero'>
        <div className='left'>
            <h1>Design confidently.</h1>
            <h1>All the food receipe at your single click.</h1>
            <h1>Track your health on daily basis</h1>
            <h1>Huge variety of exercises</h1>
            <h1>Design your home in your free time</h1>
            <h1>What's happening outside?</h1>
        </div>
        <div className='right'>
            <img src={img1} alt=""  className='himg'/>
        </div>
    </div>
  )
}

export default Home