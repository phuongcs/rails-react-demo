import React from "react"
import PropTypes from "prop-types"
import './SubmitButton.scss';

const SubmitButton = (props) => (
  <button className="btn btn-success" onClick={props.onClick}>Submit</button>
)



export default SubmitButton
