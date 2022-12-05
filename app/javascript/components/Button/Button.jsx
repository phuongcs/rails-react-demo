import React from "react"
import PropTypes from "prop-types"
import './Button.scss';

class Button extends React.Component {
  render () {
    return (
      <div>
        <button className="btn-orange">Test button</button>
      </div>
    );
  }
}

export default Button
