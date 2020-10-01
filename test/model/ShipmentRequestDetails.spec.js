/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
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

  describe('ShipmentRequestDetails', function() {
    it('should create an instance of ShipmentRequestDetails', function() {
      // uncomment below and update the code to test ShipmentRequestDetails
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // uncomment below and update the code to test the property sellerOrderId
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property itemList (base name: "ItemList")', function() {
      // uncomment below and update the code to test the property itemList
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipFromAddress (base name: "ShipFromAddress")', function() {
      // uncomment below and update the code to test the property shipFromAddress
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property packageDimensions (base name: "PackageDimensions")', function() {
      // uncomment below and update the code to test the property packageDimensions
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "Weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property mustArriveByDate (base name: "MustArriveByDate")', function() {
      // uncomment below and update the code to test the property mustArriveByDate
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipDate (base name: "ShipDate")', function() {
      // uncomment below and update the code to test the property shipDate
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property shippingServiceOptions (base name: "ShippingServiceOptions")', function() {
      // uncomment below and update the code to test the property shippingServiceOptions
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

    it('should have the property labelCustomization (base name: "LabelCustomization")', function() {
      // uncomment below and update the code to test the property labelCustomization
      //var instane = new SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails();
      //expect(instance).to.be();
    });

  });

}));