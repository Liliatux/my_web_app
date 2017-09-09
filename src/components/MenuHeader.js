import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state

    return(
      <div>
        <Menu pointing secondary color='violet'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='cv' active={activeItem === 'cv'} onClick={this.handleItemClick} />
          <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
