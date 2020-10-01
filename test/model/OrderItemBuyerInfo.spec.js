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
    instance = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
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

  describe('OrderItemBuyerInfo', function() {
    it('should create an instance of OrderItemBuyerInfo', function() {
      // uncomment below and update the code to test OrderItemBuyerInfo
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.OrderItemBuyerInfo);
    });

    it('should have the property orderItemId (base name: "OrderItemId")', function() {
      // uncomment below and update the code to test the property orderItemId
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property buyerCustomizedInfo (base name: "BuyerCustomizedInfo")', function() {
      // uncomment below and update the code to test the property buyerCustomizedInfo
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapPrice (base name: "GiftWrapPrice")', function() {
      // uncomment below and update the code to test the property giftWrapPrice
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapTax (base name: "GiftWrapTax")', function() {
      // uncomment below and update the code to test the property giftWrapTax
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftMessageText (base name: "GiftMessageText")', function() {
      // uncomment below and update the code to test the property giftMessageText
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

    it('should have the property giftWrapLevel (base name: "GiftWrapLevel")', function() {
      // uncomment below and update the code to test the property giftWrapLevel
      //var instane = new SellingPartnerApiForOrders.OrderItemBuyerInfo();
      //expect(instance).to.be();
    });

  });

}));
