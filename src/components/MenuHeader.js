import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../css/menu.css';

export default class MenuHeader extends Component {
  state = { activeItem: 'accueil' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem } = this.state

    return(
      <Menu stackable pointing inverted secondary fixed='top' size='massive' className='menuColor'>
        <Menu.Menu position='left'>
          <Menu.Item header>ZG</Menu.Item>
        </Menu.Menu>
        <Menu.Item as={Link} to='/' name='accueil' active={activeItem === 'accueil'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/cv' name='cv' active={activeItem === 'cv'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/blog' name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
