/******************************************************
 * Login Routes
 ******************************************************/

// Login Route
Router.route('/login', {
  layoutTemplate: 'login',
  action: function() {
    this.render();
    SEO.set({
      title: 'Login - ' + Meteor.App.NAME
    });
  }
});

/******************************************************
 * On Before Actions Login
 ******************************************************/
OnBeforeActions = {
  loginRequired: function(pause) {
    if (Meteor.isClient) {
      if (!Meteor.userId()) {
        Router.go('login');
      }
    }
    this.next();
  },
  loggedIn: function(pause) {
    if (Meteor.isClient) {
      if (Meteor.userId() && !Meteor.loggingIn()) {
        Router.go('/');
      }
    }
    this.next();
  }
};

// // Login required
// Router.onBeforeAction(OnBeforeActions.loginRequired, {
//   except: ['login']
// });
//
// // Logged in
// Router.onBeforeAction(OnBeforeActions.loggedIn, {
//   only: ['login']
// });
//
// Router.onRun(function() {
//   if (Meteor.isClient) {
//     if (!Meteor.userId()) {
//       Router.go('login');
//     }
//   }
//   this.next();
// });
