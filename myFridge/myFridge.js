Products = new Mongo.Collection('products');

if (Meteor.isClient) {
  Template.fridge.helpers({
    products: function () {
      return Products.find({
        place: 'fridge'
      });
    }
  });

}

if (Meteor.isServer) {

}