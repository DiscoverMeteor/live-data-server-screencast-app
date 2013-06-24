Items = new Meteor.Collection('items');

if (Meteor.isServer) {
  seed();

  Meteor.publish('items', function () {
    return Items.find();
  });

  Meteor.publish('visibleItems', function () {
    return Items.find({is_visible: true, user_id: this.userId });
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('items');
}
