import React, { Component, PropTypes } from 'react'

/******************************
* Entry Component
* --- *
* represents a Journal Entry
*******************************/

export default class Entry extends Component {
  render() {
    return (
      <li>{this.props.entry.text}</li>
    )
  }
}

Entry.PropTypes = {
  // This component gets the entry to display through a React prop.
  // We can use propTypes to indicate it is required.
  entry: PropTypes.object.isRequired,
}
