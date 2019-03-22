import React from "react";
import { Grid } from "semantic-ui-react";

import Presentation from "./Presentation";
import Punchline from "./Punchline";

import "../../css/home.css";

const Home = () => (
  <Grid centered columns="equal">
    <Grid.Row className="marginRows" />
    <Presentation />
    <Punchline />
  </Grid>
);

export default Home;
