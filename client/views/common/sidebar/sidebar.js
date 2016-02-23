Template.sidebar.onRendered(function() {
  $('.ui.sidebar')
    .sidebar({
      closable: false,
      onVisible: function() {
        $('#sidebar-toggle').removeClass('sidebar');
        $('#sidebar-toggle').addClass('arrow left');
      },
      onHide: function() {
        $('#sidebar-toggle').removeClass('arrow left');
        $('#sidebar-toggle').addClass('sidebar');
      },
    })
});

Template.sidebar.events({
  "click a": function(e, t) {
    $('.ui.sidebar')
      .sidebar('hide');
  }
});

Template.menuItems.helpers({
  items: function() {
    var self = this;
    return _.map(MenuItems, function(item) {
      item.visibility = self.visibility;
      return item;
    })
  },
  visibility: function() {
    if (this.visibility === 'mobile') {
      return 'mobile-only'
    } else if (this.visibility === 'computer') {
      return 'computer-only'
    }
  }
});
