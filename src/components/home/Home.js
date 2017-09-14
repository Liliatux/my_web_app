import React from 'react'
import { Grid } from 'semantic-ui-react'

import Presentation from './Presentation'
import Punchline from './Punchline'
import '../../css/home.css'

const Home = () => (
  <Grid centered columns='equal'>
    <Grid.Row style={{margin: '3em'}}></Grid.Row>
    <Presentation />
    <Grid.Row></Grid.Row>
    <Punchline />
    <Grid.Row></Grid.Row>
  </Grid>
)

export default Home
