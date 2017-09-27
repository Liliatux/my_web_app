import React, { Component } from 'react'
import { Grid, Image, Header, List } from 'semantic-ui-react'

import FooterList from './FooterList'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: {
        react: 'https://facebook.github.io/react/',
        redux: 'http://redux.js.org/docs/introduction/',
        semantic: 'https://react.semantic-ui.com/introduction'
      },
      name: {
        react: 'react',
        redux: 'redux',
        semantic: 'semantic-ui-react'
      }
    }
  }

  render() {
    return (
      <Grid columns={3} className='backgroundPurple colorWhite'>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Image src='./image/react.png' className='react' size='tiny' spaced />
          </Grid.Column>
          <Grid.Column>
            <Header as='h4' className='colorWhite'>Technologies Utilisées</Header>
            <List>
              <FooterList url={this.state.url.react} name={this.state.name.react} />
              <FooterList url={this.state.url.redux} name={this.state.name.redux} />
              <FooterList url={this.state.url.semantic} name={this.state.name.semantic} />
            </List>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Footer
