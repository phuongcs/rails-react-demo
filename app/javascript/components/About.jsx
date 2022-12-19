import React from 'react'
import SelectControl from "./Select/SelectControl";
import SubmitButton from "./Button/SubmitButton";

const About = props => (
  <div className="form-group border p-2">
    <div className="mb-2">
      <SelectControl items={props.items}></SelectControl>
    </div>

    <SubmitButton />

  </div>
)

About.defaultProps = {
  items: []
}

export default About;