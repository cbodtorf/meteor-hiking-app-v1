import React, { Component, PropTypes } from 'react'
import { Meteor }                      from 'meteor/meteor'

import { Entries }                     from '../api/entries.js'

/******************************
* Entry Component
* --- *
* represents a Journal Entry
*******************************/

export default class Entry extends Component {

  deleteThisEntry() {
    Meteor.call('entries.remove', this.props.entry._id);
  }

  render() {
    return (
      <li>
        <button className="delete" onClick={this.deleteThisEntry.bind(this)}>
          &times;
        </button>

        <span className="text">
          <strong>{this.props.entry.username}</strong>: {this.props.entry.text}
        </span>
        <br />
        <span className="createdAt">{this.props.entry.createdAt.toLocaleString()}</span>
      </li>
    )
  }
}

Entry.PropTypes = {
  // This component gets the entry to display through a React prop.
  // We can use propTypes to indicate it is required.

  entry: PropTypes.object.isRequired,
  createdAt: PropTypes.object,
}
