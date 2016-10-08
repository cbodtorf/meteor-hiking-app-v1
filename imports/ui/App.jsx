import React, { Component, PropTypes } from 'react'
import { createContainer }             from 'meteor/react-meteor-data'

import { Entries }                     from '../api/entries.js'
import Entry                           from './Entry.jsx'


/******************************
* App Component
* --- *
* represents entire application
*******************************/
class App extends Component {

  renderEntries() {
    return this.props.entries.map((entry) => (
      <Entry key={entry._id} entry={entry} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Journal</h1>
          <h5>道のり</h5>
        </header>

        <ul>
          {this.renderEntries()}
        </ul>
      </div>
    );
  }
}


App.PropTypes = {
  entries: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return {
    entries: Entries.find({}).fetch(),
  };
}, App)
