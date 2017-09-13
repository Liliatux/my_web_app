import React from 'react'

const Presentation = () => (
  <div className="three column centered row presentation">
		<div className="column">
	    <div className="image">
	    	<img className="ui medium circular image" src="./image/moi.jpg" alt="moi"/>
	    </div>
		</div>
    <div className="column">
			<h2 className="colorPurple familyCode">Hello World !</h2>
			<p>Bienvenue sur mon application web personnelle, vous trouverez ici mon curriculum vitae ainsi que mon blog.</p>
			<p>Je m'appelle Zélia, j'ai 25 ans et je suis <b>développeuse web</b>.</p>
		</div>
	</div>
)

export default Presentation
