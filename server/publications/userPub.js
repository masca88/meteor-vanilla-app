// Publish user
Meteor.publish('user', function() {
  return Meteor.users.find({
    _id: this.userId
  }, {
    fields: {
      "_id": true,
      "emails": true,
      "services": true,
      "profiles": true
    }
  });
});
