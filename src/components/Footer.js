import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import Contact from './contact'

const Footer = () => (
  <Grid className='backgroundPurple colorWhite'>
    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Header as='h2' content='Contact' inverted />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={3}>
      <Grid.Column>
        <Contact />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Footer
