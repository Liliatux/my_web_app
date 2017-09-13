import React from 'react'
import Presentation from './Presentation'
import Punchline from './Punchline'
import '../../css/home.css'

const Home = () => (
  <div className="ui grid">
    <div className="row"></div>
    <Presentation />
    <div className="row"></div>
    <Punchline />
  </div>
)

export default Home
