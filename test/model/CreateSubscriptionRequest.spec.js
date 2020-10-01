/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.
 *
 * OpenAPI spec version: v1
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
    factory(root.expect, root.SellingPartnerApiForNotifications);
  }
}(this, function(expect, SellingPartnerApiForNotifications) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForNotifications.CreateSubscriptionRequest();
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

  describe('CreateSubscriptionRequest', function() {
    it('should create an instance of CreateSubscriptionRequest', function() {
      // uncomment below and update the code to test CreateSubscriptionRequest
      //var instane = new SellingPartnerApiForNotifications.CreateSubscriptionRequest();
      //expect(instance).to.be.a(SellingPartnerApiForNotifications.CreateSubscriptionRequest);
    });

    it('should have the property payloadVersion (base name: "payloadVersion")', function() {
      // uncomment below and update the code to test the property payloadVersion
      //var instane = new SellingPartnerApiForNotifications.CreateSubscriptionRequest();
      //expect(instance).to.be();
    });

    it('should have the property destinationId (base name: "destinationId")', function() {
      // uncomment below and update the code to test the property destinationId
      //var instane = new SellingPartnerApiForNotifications.CreateSubscriptionRequest();
      //expect(instance).to.be();
    });

  });

}));
