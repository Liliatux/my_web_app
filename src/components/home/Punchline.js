import React from "react";
import { Grid, Header } from "semantic-ui-react";

const Punchline = () => (
  <Grid.Row className="background">
    <Header textAlign="center">
      <Header size="huge" className="familyCode">
        <span className="surligne">Web Developer</span>
      </Header>
      <Header.Content className="familyCode">
        <span className="surligne">
          "Naturally calm and open-minded, I like working in a team"
        </span>
      </Header.Content>
      <Header.Content className="familyCode">
        <span className="surligne">
        "Passionate and demanding in my work, I perfom my work everyday"
        </span>
      </Header.Content>
    </Header>
  </Grid.Row>
);

export default Punchline;
