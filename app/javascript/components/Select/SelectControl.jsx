import React from 'react'
import Select from 'react-select'

const SelectControl = (props) => (
  <Select options={props.items} />
)

SelectControl.defaultProps = {
  items: []
}

export default SelectControl
