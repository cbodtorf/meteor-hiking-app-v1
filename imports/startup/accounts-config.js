import { Accounts } from 'meteor/accounts-base';

// for more info:
// https://docs.meteor.com/api/accounts.html#Accounts-ui-config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});
