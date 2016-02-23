Template.profileData.helpers({
  collection: function() {
    try {
      return Meteor.users;
    } catch (e) {
      console.log(e);
    }
  },
  formSettings: function() {
    var user = Meteor.user();
    if (user) {
      return {
        doc: {
          username: user.username || "",
          email: user.emails ? user.emails[0].address : "",
          name: user.profile.name || "",
          lastname: user.profile.lastname || "",
          dob: user.profile.dob || "",
          gender: user.profile.gender || "",
        },
        type: 'update',
        id: 'profileDataForm',
        schema: function() {
          return Schemas.User;
        }
      };
    }
  },
});

AutoForm.addHooks("profileDataForm", {
  onSuccess: function(formType, result) {
    Router.go('profiles');
  }
});
