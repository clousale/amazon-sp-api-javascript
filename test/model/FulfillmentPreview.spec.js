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
    instance = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
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

  describe('FulfillmentPreview', function() {
    it('should create an instance of FulfillmentPreview', function() {
      // uncomment below and update the code to test FulfillmentPreview
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview);
    });

    it('should have the property shippingSpeedCategory (base name: "ShippingSpeedCategory")', function() {
      // uncomment below and update the code to test the property shippingSpeedCategory
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property scheduledDeliveryInfo (base name: "ScheduledDeliveryInfo")', function() {
      // uncomment below and update the code to test the property scheduledDeliveryInfo
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property isFulfillable (base name: "IsFulfillable")', function() {
      // uncomment below and update the code to test the property isFulfillable
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property isCODCapable (base name: "IsCODCapable")', function() {
      // uncomment below and update the code to test the property isCODCapable
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property estimatedShippingWeight (base name: "EstimatedShippingWeight")', function() {
      // uncomment below and update the code to test the property estimatedShippingWeight
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property estimatedFees (base name: "EstimatedFees")', function() {
      // uncomment below and update the code to test the property estimatedFees
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentPreviewShipments (base name: "FulfillmentPreviewShipments")', function() {
      // uncomment below and update the code to test the property fulfillmentPreviewShipments
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property unfulfillablePreviewItems (base name: "UnfulfillablePreviewItems")', function() {
      // uncomment below and update the code to test the property unfulfillablePreviewItems
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property orderUnfulfillableReasons (base name: "OrderUnfulfillableReasons")', function() {
      // uncomment below and update the code to test the property orderUnfulfillableReasons
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instane = new SellingPartnerApiForFulfillmentOutbound.FulfillmentPreview();
      //expect(instance).to.be();
    });

  });

}));
