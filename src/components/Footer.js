import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import Scroll from 'react-scroll'

import Contact from './contact'

export const scrollToTop = () => {
  let scroll = Scroll.animateScroll
  scroll.scrollToTop()
}

const Footer = () => (
  <Grid className='backgroundPurple colorWhite'>
    <Grid.Row>
      <Grid.Column textAlign='center'>
        <Icon link inverted name='arrow up' size='large' onClick={scrollToTop}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={2}>
      <Grid.Column>
        <Contact />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Footer
