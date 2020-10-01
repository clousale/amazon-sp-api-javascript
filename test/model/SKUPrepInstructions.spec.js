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
    instance = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
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

  describe('SKUPrepInstructions', function() {
    it('should create an instance of SKUPrepInstructions', function() {
      // uncomment below and update the code to test SKUPrepInstructions
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions);
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // uncomment below and update the code to test the property sellerSKU
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property barcodeInstruction (base name: "BarcodeInstruction")', function() {
      // uncomment below and update the code to test the property barcodeInstruction
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property prepGuidance (base name: "PrepGuidance")', function() {
      // uncomment below and update the code to test the property prepGuidance
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property prepInstructionList (base name: "PrepInstructionList")', function() {
      // uncomment below and update the code to test the property prepInstructionList
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

    it('should have the property amazonPrepFeesDetailsList (base name: "AmazonPrepFeesDetailsList")', function() {
      // uncomment below and update the code to test the property amazonPrepFeesDetailsList
      //var instane = new SellingPartnerApiForFulfillmentInbound.SKUPrepInstructions();
      //expect(instance).to.be();
    });

  });

}));