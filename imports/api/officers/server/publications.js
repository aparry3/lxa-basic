import { Meteor } from 'meteor/meteor';

import { Officers } from '../officers.js';

Meteor.publish('officers.public', function officersPublic() {
  return Officers.find({});
});
