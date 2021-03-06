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
    instance = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
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

  describe('PartneredLtlDataOutput', function() {
    it('should create an instance of PartneredLtlDataOutput', function() {
      // uncomment below and update the code to test PartneredLtlDataOutput
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput);
    });

    it('should have the property contact (base name: "Contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property boxCount (base name: "BoxCount")', function() {
      // uncomment below and update the code to test the property boxCount
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property sellerFreightClass (base name: "SellerFreightClass")', function() {
      // uncomment below and update the code to test the property sellerFreightClass
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property freightReadyDate (base name: "FreightReadyDate")', function() {
      // uncomment below and update the code to test the property freightReadyDate
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property palletList (base name: "PalletList")', function() {
      // uncomment below and update the code to test the property palletList
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property totalWeight (base name: "TotalWeight")', function() {
      // uncomment below and update the code to test the property totalWeight
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property sellerDeclaredValue (base name: "SellerDeclaredValue")', function() {
      // uncomment below and update the code to test the property sellerDeclaredValue
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property amazonCalculatedValue (base name: "AmazonCalculatedValue")', function() {
      // uncomment below and update the code to test the property amazonCalculatedValue
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property previewPickupDate (base name: "PreviewPickupDate")', function() {
      // uncomment below and update the code to test the property previewPickupDate
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property previewDeliveryDate (base name: "PreviewDeliveryDate")', function() {
      // uncomment below and update the code to test the property previewDeliveryDate
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property previewFreightClass (base name: "PreviewFreightClass")', function() {
      // uncomment below and update the code to test the property previewFreightClass
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property amazonReferenceId (base name: "AmazonReferenceId")', function() {
      // uncomment below and update the code to test the property amazonReferenceId
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property isBillOfLadingAvailable (base name: "IsBillOfLadingAvailable")', function() {
      // uncomment below and update the code to test the property isBillOfLadingAvailable
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property partneredEstimate (base name: "PartneredEstimate")', function() {
      // uncomment below and update the code to test the property partneredEstimate
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "CarrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instane = new SellingPartnerApiForFulfillmentInbound.PartneredLtlDataOutput();
      //expect(instance).to.be();
    });

  });

}));
