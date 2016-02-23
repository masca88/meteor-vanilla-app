Template.profileDetails.helpers({
  'profile' : function () {
    if(Meteor.user())
      return Meteor.user().profile;
  },
  'user' : function() {
    return Meteor.user();
  }
});

Template.profileDetails.events({
  "click #edit": function(e, t){
    Router.go("profileData");
  }
});

Template.profileDetails.onRendered(function(){
  Meteor.subscribe("user");
});
