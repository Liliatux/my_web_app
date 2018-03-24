import React from 'react'
import { Grid } from 'semantic-ui-react'

import { cvData } from './data';
import CvItem from './CvItem'

class Cv extends React.Component {
  render () {
    return (
      <Grid centered columns='equal'>
        <Grid.Row className='marginRows'></Grid.Row>
        <CvItem title='Mes projets' icon='github' data={cvData.projects} />
        <CvItem title='Compétences' icon='fork' data={cvData.skills} />
        <CvItem title='Expériences' icon='id badge' data={cvData.experiences} link />
        <CvItem title='Formations' icon='book' data={cvData.studies} link />
      </Grid>
    )
  }
}


export default Cv
