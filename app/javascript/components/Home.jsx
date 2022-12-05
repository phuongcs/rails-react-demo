import React from 'react'
import Button from "./Button/Button";
import SelectControl from "./Select/SelectControl";

const Home = props => (
  <>
    <div>Hello {props.name}!</div>
    <Button></Button>
    <SelectControl></SelectControl>
  </>
)

Home.defaultProps = {
  name: 'David'
}

export default Home;