import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

const Presentation = () => (
  <Grid.Row centered columns={3} className="marginRows">
    <Grid.Column>
      <Image src="./image/moi.jpg" size="medium" circular />
    </Grid.Column>
    <Grid.Column>
      <Header as="h2" className="colorPurple familyCode">
        Hello World !
      </Header>
      <p>
        Welcome to my web app, you will find my CV and some pictures of my travels.
      </p>
      <p>
        My name is Zelia, I am a web developer.
      </p>
      <p>
        To enjoy my life, I like to take some pictures of beautiful landscapes.
      </p>
      <p>
        Defender of the animal cause, I am a volunteer in animal welfare association.
      </p>
    </Grid.Column>
  </Grid.Row>
);

export default Presentation;
