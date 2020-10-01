/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
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
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForServices.ServiceApi();
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

  describe('ServiceApi', function() {
    describe('addAppointmentForServiceJobByServiceJobId', function() {
      it('should call addAppointmentForServiceJobByServiceJobId successfully', function(done) {
        //uncomment below and update the code to test addAppointmentForServiceJobByServiceJobId
        //instance.addAppointmentForServiceJobByServiceJobId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelServiceJobByServiceJobId', function() {
      it('should call cancelServiceJobByServiceJobId successfully', function(done) {
        //uncomment below and update the code to test cancelServiceJobByServiceJobId
        //instance.cancelServiceJobByServiceJobId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('completeServiceJobByServiceJobId', function() {
      it('should call completeServiceJobByServiceJobId successfully', function(done) {
        //uncomment below and update the code to test completeServiceJobByServiceJobId
        //instance.completeServiceJobByServiceJobId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceJobByServiceJobId', function() {
      it('should call getServiceJobByServiceJobId successfully', function(done) {
        //uncomment below and update the code to test getServiceJobByServiceJobId
        //instance.getServiceJobByServiceJobId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceJobs', function() {
      it('should call getServiceJobs successfully', function(done) {
        //uncomment below and update the code to test getServiceJobs
        //instance.getServiceJobs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rescheduleAppointmentForServiceJobByServiceJobId', function() {
      it('should call rescheduleAppointmentForServiceJobByServiceJobId successfully', function(done) {
        //uncomment below and update the code to test rescheduleAppointmentForServiceJobByServiceJobId
        //instance.rescheduleAppointmentForServiceJobByServiceJobId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
