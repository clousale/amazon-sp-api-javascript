/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
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

  describe('PartneredSmallParcelPackageOutput', function() {
    it('should create an instance of PartneredSmallParcelPackageOutput', function() {
      // uncomment below and update the code to test PartneredSmallParcelPackageOutput
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput);
    });

    it('should have the property dimensions (base name: "Dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "Weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "CarrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be();
    });

    it('should have the property trackingId (base name: "TrackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be();
    });

    it('should have the property packageStatus (base name: "PackageStatus")', function() {
      // uncomment below and update the code to test the property packageStatus
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelPackageOutput();
      //expect(instance).to.be();
    });

  });

}));
