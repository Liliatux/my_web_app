import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import MenuHeader from './components/MenuHeader'
import App from './components/App'
import Home from './components/home/Home'
import Cv from './components/cv/Cv'
import Blog from './components/blog/Blog'

const Root = () => (
  <BrowserRouter>
    <div>
      <MenuHeader />
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/cv' component={Cv} />
        <Route path='/blog' component={Blog} />
      </App>
    </div>
  </BrowserRouter>
)

export default Root
