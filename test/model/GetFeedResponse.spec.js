/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2020-09-04
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
    factory(root.expect, root.SellingPartnerApiForFeeds);
  }
}(this, function(expect, SellingPartnerApiForFeeds) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFeeds.GetFeedResponse();
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

  describe('GetFeedResponse', function() {
    it('should create an instance of GetFeedResponse', function() {
      // uncomment below and update the code to test GetFeedResponse
      //var instane = new SellingPartnerApiForFeeds.GetFeedResponse();
      //expect(instance).to.be.a(SellingPartnerApiForFeeds.GetFeedResponse);
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instane = new SellingPartnerApiForFeeds.GetFeedResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new SellingPartnerApiForFeeds.GetFeedResponse();
      //expect(instance).to.be();
    });

  });

}));
