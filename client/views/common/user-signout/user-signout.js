Template.userSignOut.helpers({
  username: function() {
    var user = Meteor.user();

    if (user) {
      var name = user.profile.name || "",
        lastname = user.profile.lastname || "";
      return name + " " + lastname;
    }
  }
});

Template.userSignOut.events({
  "click button": function(e, t) {
    AccountsTemplates.logout();
  }
});
