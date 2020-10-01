/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFinances.RentalTransactionEvent();
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

  describe('RentalTransactionEvent', function() {
    it('should create an instance of RentalTransactionEvent', function() {
      // uncomment below and update the code to test RentalTransactionEvent
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.RentalTransactionEvent);
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalEventType (base name: "RentalEventType")', function() {
      // uncomment below and update the code to test the property rentalEventType
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property extensionLength (base name: "ExtensionLength")', function() {
      // uncomment below and update the code to test the property extensionLength
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property postedDate (base name: "PostedDate")', function() {
      // uncomment below and update the code to test the property postedDate
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalChargeList (base name: "RentalChargeList")', function() {
      // uncomment below and update the code to test the property rentalChargeList
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalFeeList (base name: "RentalFeeList")', function() {
      // uncomment below and update the code to test the property rentalFeeList
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceName (base name: "MarketplaceName")', function() {
      // uncomment below and update the code to test the property marketplaceName
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalInitialValue (base name: "RentalInitialValue")', function() {
      // uncomment below and update the code to test the property rentalInitialValue
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalReimbursement (base name: "RentalReimbursement")', function() {
      // uncomment below and update the code to test the property rentalReimbursement
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property rentalTaxWithheldList (base name: "RentalTaxWithheldList")', function() {
      // uncomment below and update the code to test the property rentalTaxWithheldList
      //var instane = new SellingPartnerApiForFinances.RentalTransactionEvent();
      //expect(instance).to.be();
    });

  });

}));
