/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
    factory(root.expect, root.SellingPartnerApiForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentOutbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFulfillmentOutbound.TrackingEvent();
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

  describe('TrackingEvent', function() {
    it('should create an instance of TrackingEvent', function() {
      // uncomment below and update the code to test TrackingEvent
      //var instane = new SellingPartnerApiForFulfillmentOutbound.TrackingEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentOutbound.TrackingEvent);
    });

    it('should have the property eventDate (base name: "EventDate")', function() {
      // uncomment below and update the code to test the property eventDate
      //var instane = new SellingPartnerApiForFulfillmentOutbound.TrackingEvent();
      //expect(instance).to.be();
    });

    it('should have the property eventAddress (base name: "EventAddress")', function() {
      // uncomment below and update the code to test the property eventAddress
      //var instane = new SellingPartnerApiForFulfillmentOutbound.TrackingEvent();
      //expect(instance).to.be();
    });

    it('should have the property eventCode (base name: "EventCode")', function() {
      // uncomment below and update the code to test the property eventCode
      //var instane = new SellingPartnerApiForFulfillmentOutbound.TrackingEvent();
      //expect(instance).to.be();
    });

  });

}));
