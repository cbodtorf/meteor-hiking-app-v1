import React, { Component, PropTypes } from 'react'
import ReactDOM                        from 'react-dom'
import { createContainer }             from 'meteor/react-meteor-data'
import { Meteor }                      from 'meteor/meteor'

import AccountsUIWrapper               from './accountsUIWrapper.jsx'

import { Entries }                     from '../api/entries.js'
import Entry                           from './Entry.jsx'


/******************************
* App Component
* --- *
* represents entire application
*******************************/
class App extends Component {
  handleSubmit(event) {
    event.preventDefault()

    // find text field via the React ref.
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Meteor.call('entries.insert', text);

    // clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

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

          <AccountsUIWrapper />

        {/* if not logged in, then show nothing */}
          { this.props.currentUser ?
          <form className="new-entry" onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              placeholder="add entry"
              />
          </form> : ''
        }

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
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  return {
    entries: Entries.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
}, App)
