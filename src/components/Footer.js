import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Footer = () => (
  <Grid columns={2} divided inverted className='backgroundPurple colorWhite'>
    <Grid.Row textAlign='center'>
      <Grid.Column>
        <span>React</span>
        <Image src='./image/react.png' className='react' size='mini' spaced />
      </Grid.Column>
      <Grid.Column>Test</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Footer
