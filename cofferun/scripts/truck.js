(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    this.db.add(order.emailAddress, order);
  }

  Truck.prototype.deliverOrder = function(customerId) {
    this.db.remove(customerId);
  }

  Tructk.prototype.printOrders = function() {
    
  }

  App.Truck = Truck;
  window.App = App;
})(window);
