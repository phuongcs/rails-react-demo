import React from 'react'
import Button from "./Button/Button";
import SelectControl from "./Select/SelectControl";

const About = props => (
  <div className="form-group border p-2">
    <div className="mb-2">
      <SelectControl items={props.items}></SelectControl>
    </div>

    <Button />

  </div>
)

About.defaultProps = {
  items: []
}

export default About;