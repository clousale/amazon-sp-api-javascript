/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
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
    factory(root.expect, root.SellingPartnerApiForFbaSmallAndLight);
  }
}(this, function(expect, SellingPartnerApiForFbaSmallAndLight) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
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

  describe('SmallAndLightApi', function() {
    describe('deleteSmallAndLightEnrollmentBySellerSKU', function() {
      it('should call deleteSmallAndLightEnrollmentBySellerSKU successfully', function(done) {
        //uncomment below and update the code to test deleteSmallAndLightEnrollmentBySellerSKU
        //instance.deleteSmallAndLightEnrollmentBySellerSKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmallAndLightEligibilityBySellerSKU', function() {
      it('should call getSmallAndLightEligibilityBySellerSKU successfully', function(done) {
        //uncomment below and update the code to test getSmallAndLightEligibilityBySellerSKU
        //instance.getSmallAndLightEligibilityBySellerSKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmallAndLightEnrollmentBySellerSKU', function() {
      it('should call getSmallAndLightEnrollmentBySellerSKU successfully', function(done) {
        //uncomment below and update the code to test getSmallAndLightEnrollmentBySellerSKU
        //instance.getSmallAndLightEnrollmentBySellerSKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmallAndLightFeePreview', function() {
      it('should call getSmallAndLightFeePreview successfully', function(done) {
        //uncomment below and update the code to test getSmallAndLightFeePreview
        //instance.getSmallAndLightFeePreview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putSmallAndLightEnrollmentBySellerSKU', function() {
      it('should call putSmallAndLightEnrollmentBySellerSKU successfully', function(done) {
        //uncomment below and update the code to test putSmallAndLightEnrollmentBySellerSKU
        //instance.putSmallAndLightEnrollmentBySellerSKU(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
