import React from "react"
import PropTypes from "prop-types"
import './Button.scss';

class Button extends React.Component {
  render () {
    return (
      <button className="btn btn-success">Submit</button>
    );
  }
}

export default Button
