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
    instance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
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

  describe('FbaOutboundApi', function() {
    describe('cancelFulfillmentOrder', function() {
      it('should call cancelFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test cancelFulfillmentOrder
        //instance.cancelFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFulfillmentOrder', function() {
      it('should call createFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test createFulfillmentOrder
        //instance.createFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFulfillmentReturn', function() {
      it('should call createFulfillmentReturn successfully', function(done) {
        //uncomment below and update the code to test createFulfillmentReturn
        //instance.createFulfillmentReturn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentOrder', function() {
      it('should call getFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentOrder
        //instance.getFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentPreview', function() {
      it('should call getFulfillmentPreview successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentPreview
        //instance.getFulfillmentPreview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPackageTrackingDetails', function() {
      it('should call getPackageTrackingDetails successfully', function(done) {
        //uncomment below and update the code to test getPackageTrackingDetails
        //instance.getPackageTrackingDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAllFulfillmentOrders', function() {
      it('should call listAllFulfillmentOrders successfully', function(done) {
        //uncomment below and update the code to test listAllFulfillmentOrders
        //instance.listAllFulfillmentOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReturnReasonCodes', function() {
      it('should call listReturnReasonCodes successfully', function(done) {
        //uncomment below and update the code to test listReturnReasonCodes
        //instance.listReturnReasonCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFulfillmentOrder', function() {
      it('should call updateFulfillmentOrder successfully', function(done) {
        //uncomment below and update the code to test updateFulfillmentOrder
        //instance.updateFulfillmentOrder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
