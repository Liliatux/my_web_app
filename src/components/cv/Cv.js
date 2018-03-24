import React from 'react'
import { Grid } from 'semantic-ui-react'

import CvItem from './CvItem'

class Cv extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      projects: [
        {header: 'Formulaire de création de commandes', description: "Recherche et création d'une solution de gestion de commandes interne, à travers un formulaire en trois partie (création, récapitulatif et validation de la commande). Technologies utilisées: React, Redux, React-router 3, Webpack, Babel, Django Webpack Loader."},
        {header: 'Frigomeo', description: "Single page application de commerce sur tablette. Technologies utilisées: React et Redux."},
        {header: 'Truk IOT', description: "Progressive Web Apps pour orienter les visiteurs depuis leur mobile, dans l'IOT Valley 231. Technologies utilisées: React, Redux, SVG."},
        {header: "Adap'ta Boite", description: "Page web pour le projet Adap'ta Boite qui souhaite adapter les entreprises aux personnes en situation de handicap à travers la diffusion de vidéos. Evènnement: Adaptathon de Toulouse. Technologies utilisées: Semantic UI"}
      ],
      skills: [
        {header: 'Techniques', description: "Git, ReactJS, Redux, Webpack, Babel, Semantic UI, Django Rest Framework."},
        {header: 'Méthodologies/Outils', description: "Scrum, Agile, Pomodoro, Todolist, Trello."},
        {header: 'Humaines', description: "Rigoureuse, curieuse, créative, chaleureuse, participative."}
      ],
      experiences: [
        {header: "Développeuse Web chez CityMeo", description: "Développement d'outils interne, ajout de fonctionnalité au site web existant, mise en place d'une refonte du site web de CityMeo.", link: "https://citymeo.fr/"},
        {header: "Stagiaire chez CityMeo", description: "Intégration et utilisation des outils et méthodologies utilisées par l'équipe technique, refonte du front-end du projet 'Frigomeo'.", link: "https://citymeo.fr/"}
      ],
      studies: [
        {header: "Simplon.co", description: "Ecole de formation profession aux métiers du numérique et entreprise de l'Economie Sociale et Solidaire. Spécialité développement web et mobile.", link: "https://simplon.co/"},
        {header: "Université Toulouse Jean Jaurès", description: "Maitrise en Psychologie de la Santé, Psychopathologie et des Neuroscience. Mention Bien.", link: "http://www.univ-tlse2.fr/"},
        {header: "Université de Picardie Jules Verne", description: "Licence mention Psychologie.", link: "https://www.u-picardie.fr/"}
      ]
    }
  }

  render () {
    return (
      <Grid centered columns='equal'>
        <Grid.Row className='marginRows'></Grid.Row>
        <CvItem title='Mes projets' icon='github' data={this.state.projects} />
        <CvItem title='Compétences' icon='fork' data={this.state.skills} />
        <CvItem title='Expériences' icon='id badge' data={this.state.experiences} link />
        <CvItem title='Formations' icon='book' data={this.state.studies} link />
      </Grid>
    )
  }
}


export default Cv
