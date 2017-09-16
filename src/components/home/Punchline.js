import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const Punchline = () => (
  <Grid.Row className='background marginRows'>
    <Header textAlign='center'>
      <Header size='huge' className='familyCode'><span className="surligne">Développeuse Web</span></Header>
      <Header.Content className='familyCode'><span className='surligne'>"D'un naturel calme et ouverte d'esprit, j'aime faire de la veille technologique."</span></Header.Content>
      <Header.Content className='familyCode'><span className='surligne'>"Passionnée et exigente dans mon travail, je ne refuse jamais un challenge."</span></Header.Content>
    </Header>
  </Grid.Row>
)

export default Punchline
