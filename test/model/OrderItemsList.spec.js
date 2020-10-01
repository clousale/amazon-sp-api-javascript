/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForOrders.OrderItemsList();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderItemsList', function() {
    it('should create an instance of OrderItemsList', function() {
      // uncomment below and update the code to test OrderItemsList
      //var instane = new SellingPartnerApiForOrders.OrderItemsList();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.OrderItemsList);
    });

    it('should have the property orderItems (base name: "OrderItems")', function() {
      // uncomment below and update the code to test the property orderItems
      //var instane = new SellingPartnerApiForOrders.OrderItemsList();
      //expect(instance).to.be();
    });

    it('should have the property nextToken (base name: "NextToken")', function() {
      // uncomment below and update the code to test the property nextToken
      //var instane = new SellingPartnerApiForOrders.OrderItemsList();
      //expect(instance).to.be();
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instane = new SellingPartnerApiForOrders.OrderItemsList();
      //expect(instance).to.be();
    });

  });

}));
