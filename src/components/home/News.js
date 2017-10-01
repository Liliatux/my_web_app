import React from 'react'
import { connect } from 'react-redux'
import { Grid, Item, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import { activeItem } from '../../actions/menuAction'

const News = ({ dispatch }) => (
  <Grid.Row className='marginRows'>
    <Item.Group divided>
      <Item>
        <Item.Image src='./image/kanban.png' />
        <Item.Content>
          <Item.Header as={Link} to='/blog' onClick={() => dispatch(activeItem('blog')) }>La méthode Agile</Item.Header>
          <Item.Meta>
            <span>"Indispensable pour l'organisation en équipe ?"</span>
          </Item.Meta>
          <Item.Extra>
            <Label>Scrum</Label>
            <Label>Kanban</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </Grid.Row>
)

export default connect()(News)
