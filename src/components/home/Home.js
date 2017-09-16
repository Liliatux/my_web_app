import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import Presentation from './Presentation'
import Punchline from './Punchline'
import News from './News'

import '../../css/home.css'

const Home = () => (
  <Grid centered columns='equal'>
    <Grid.Row className='marginRows'></Grid.Row>
    <Presentation />
    <Punchline />
    <Header textAlign='center' size='huge' className='colorPurple familyCode'>Actualités</Header>
    <News />
  </Grid>
)

export default Home
