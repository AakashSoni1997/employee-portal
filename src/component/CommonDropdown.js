// CommonDropdown.js
import React from 'react'
import Select from 'react-select'

const CommonDropdown = ({ options, selectedValue, onChange, placeholder }) => {
  return (
    <Select
      options={options}
      value={selectedValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default CommonDropdown
