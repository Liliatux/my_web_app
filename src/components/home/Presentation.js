import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Presentation = () => (
    <Grid.Row centered columns={3}>
		  <Grid.Column>
	    	<Image src='./image/moi.jpg' size='medium' shape='circular' />
		  </Grid.Column>
      <Grid.Column>
  			<h2 className="colorPurple familyCode">Hello World !</h2>
  			<p>Bienvenue sur mon application web personnelle, vous trouverez ici mon curriculum vitae ainsi que mon blog.</p>
  			<p>Je m'appelle Zélia, j'ai 25 ans et je suis <b>développeuse web</b>.</p>
  		</Grid.Column>
    </Grid.Row>
)

export default Presentation
