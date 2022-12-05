import React from "react"
import PropTypes from "prop-types"
import './Button.scss';

class Button extends React.Component {
  render () {
    return (
      <div>
        <button className="btn btn-success">Submit</button>
      </div>
    );
  }
}

export default Button
