import React from 'react'
import { Grid } from 'semantic-ui-react'

import CvItem from './CvItem'
import Interests from './Interests'

class Cv extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      projects: [
        {header: 'Frigomeo', description: "Single page application de commerce sur tablette. Technologies utilisées: React et Redux."},
        {header: 'Truk IOT', description: "Progressive Web Apps pour orienter les visiteurs depuis leur mobile, dans l'IOT Valley 231. Technologies utilisées: React, Redux, SVG."},
        {header: "Adap'ta Boite", description: "Page web pour le projet Adap'ta Boite qui souhaite adapter les entreprises aux personnes en situation de handicap à travers la diffusion de vidéos. Evènnement: Adaptathon de Toulouse. Technologies utilisées: Semantic UI"}
      ],
      skills: [],
      experiences: [],
      studies: []
    }
  }

  render () {
    return (
      <Grid centered columns='equal'>
        <Grid.Row className='marginRows'></Grid.Row>
        <CvItem title='Mes projets' icon='github' data={this.state.projects} />
        <CvItem title='Compétences' icon='' data={this.state.skills} />
        <CvItem title='Expériences' icon='' data={this.state.experiences} />
        <CvItem title='Formations' icon='' data={this.state.studies} />
        <Interests />
      </Grid>
    )
  }
}


export default Cv
