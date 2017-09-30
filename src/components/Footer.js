import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

import Contact from './contact'

class Footer extends Component {
  handleSubmit = (value) => {
    console.log(value)
  }

  render() {
    return (
      <Grid className='backgroundPurple colorWhite'>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Header as='h2' content='Contact' inverted />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Contact onSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Footer
