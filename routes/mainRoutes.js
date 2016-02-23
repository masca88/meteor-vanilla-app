// Home Route
Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [
      // Meteor.subscribe("items")
    ]
  },
  action: function() {
    this.render();
    SEO.set({
      title: 'Home - ' + Meteor.App.NAME
    });
  }
});

/******************************************************
 * On Before Actions
 ******************************************************/
var OnBeforeActions, WaitOn;

/******************************************************
 * WaitOn App Data
 ******************************************************/
WaitOn = {
  userSub: function() {
    return [
      Meteor.subscribe('user'),
    ];
  }
};

// Main waitOn User Subscription
Router.waitOn(WaitOn.userSub, {
  except: ['login']
});
