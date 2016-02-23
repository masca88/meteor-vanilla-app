// Publish all apps from API
Meteor.publish('apps', function() {
  var self = this,
    API_URL = Meteor.Config.API_URL,
    API_HEADER = Meteor.Config.HTTP_HEADERS_AUTH_API;

  try {
    var response = HTTP.get(API_URL + '/apps', API_HEADER);

    _.each(response.data, function(item) {
      self.added('apps', item.id, item);
    });

    self.ready();
  } catch (error) {
    console.log(error);
  }
});

// Publish a single app from API
Meteor.publish('app', function(appId) {
  var self = this,
    API_URL = Meteor.Config.API_URL,
    API_HEADER = Meteor.Config.HTTP_HEADERS_AUTH_API;

  try {
    var response = HTTP.get(API_URL + '/apps/' + appId, API_HEADER);

    self.added('apps', Random.id(), response.data);

    self.ready();
  } catch (error) {
    console.log(error);
  }
});
