import React from 'react'
import { Grid, Segment, Header, List } from 'semantic-ui-react'

const CvItem = ({ title, icon, data, link }) => (
  <Grid.Row centered columns={2} className='marginRows'>
    <Grid.Column>
      <Segment size='large' padded>
        <Header as='h2' className='colorPurple familyCode'>{title}</Header>
        <List divided relaxed>
          {data.map((item, index) => (
            <List.Item key={index}>
              <List.Icon name={icon} size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as={link ? 'a' : ''} href={link ? item.link : ''}>{item.header}</List.Header>
                <List.Description>{item.description}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    </Grid.Column>
  </Grid.Row>
)

export default CvItem
