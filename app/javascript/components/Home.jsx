import React from 'react'
import Button from "./Button/Button";
import SelectControl from "./Select/SelectControl";

const Home = props => (
  <div className="form-group">
    <div className="mb-2">Hello {props.name}!</div>
    <div className="mb-2">
      <input className="form-control"/>
    </div>
    <div className="mb-2">
      <SelectControl></SelectControl>
    </div>

    <Button></Button>

  </div>
)

Home.defaultProps = {
  name: 'David'
}

export default Home;