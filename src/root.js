import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import MenuContainer from './containers/MenuContainer'
import App from './components/App'
import Home from './components/home/Home'
import Cv from './components/cv/Cv'
import Blog from './components/blog/Blog'
import Footer from './components/Footer'

const Root = () => (
  <BrowserRouter>
    <div>
      <MenuContainer />
      <App>
        <Route exact path='/' component={Home} />
        <Route path='/cv' component={Cv} />
        <Route path='/blog' component={Blog} />
      </App>
      <Footer />
    </div>
  </BrowserRouter>
)

export default Root
