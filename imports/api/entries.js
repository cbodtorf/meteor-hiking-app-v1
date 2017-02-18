import { Meteor } from 'meteor/meteor'
import { Mongo }  from 'meteor/mongo'
import { check }  from 'meteor/check'

export const Entries = new Mongo.Collection('entries')

Meteor.methods({
  'entries.insert'(text) {
    check(text, String)

    // Make sure the user is logged in before inserting an entry
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Entries.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    })
  },

  'entries.remove'(entryId) {
    check(entryId, String);

    // Make sure the user is logged in before removing an entry
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Entries.remove(entryId);
  },
})
