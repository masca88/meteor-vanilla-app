// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Viveat',
  DESCRIPTION: 'Viveat Members login and profile application',
  SMALL_LOGO: "/images/logos/viveat_white_red_small_logo.png",
  BIG_LOGO: "/images/logos/viveat_white_red_big_logo.png",
  SIGNIN: false
};
