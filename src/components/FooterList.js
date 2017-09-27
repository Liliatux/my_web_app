import React from 'react'
import { List } from 'semantic-ui-react'

const FooterList = ({url, name}) => (
  <List.Item>
    <a href={url}>{name}</a>
  </List.Item>
)

export default FooterList
