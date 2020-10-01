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

import ApiClient from "../ApiClient";
import CancelShipmentResponse from '../models/CancelShipmentResponse';
import CreateShipmentRequest from '../models/CreateShipmentRequest';
import CreateShipmentResponse from '../models/CreateShipmentResponse';
import GetAdditionalSellerInputsRequest from '../models/GetAdditionalSellerInputsRequest';
import GetAdditionalSellerInputsResponse from '../models/GetAdditionalSellerInputsResponse';
import GetEligibleShipmentServicesRequest from '../models/GetEligibleShipmentServicesRequest';
import GetEligibleShipmentServicesResponse from '../models/GetEligibleShipmentServicesResponse';
import GetShipmentResponse from '../models/GetShipmentResponse';

/**
* MerchantFulfillment service.
* @module client/apis/MerchantFulfillmentApi
* @version v0
*/
export default class MerchantFulfillmentApi {

    /**
    * Constructs a new MerchantFulfillmentApi. 
    * @alias module:client/apis/MerchantFulfillmentApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cancelShipment operation.
     * @callback module:client/apis/MerchantFulfillmentApi~cancelShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CancelShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the shipment indicated by the specified shipment identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~cancelShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CancelShipmentResponse}
     */
    cancelShipment(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CancelShipmentResponse;

      return this.apiClient.callApi(
        '/mfn/v0/shipments/{shipmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cancelShipmentOld operation.
     * @callback module:client/apis/MerchantFulfillmentApi~cancelShipmentOldCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CancelShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the shipment indicated by the specified shipment identifer.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~cancelShipmentOldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CancelShipmentResponse}
     */
    cancelShipmentOld(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CancelShipmentResponse;

      return this.apiClient.callApi(
        '/mfn/v0/shipments/{shipmentId}/cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createShipment operation.
     * @callback module:client/apis/MerchantFulfillmentApi~createShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a shipment with the information provided.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~createShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateShipmentResponse}
     */
    createShipment(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateShipmentResponse;

      return this.apiClient.callApi(
        '/mfn/v0/shipments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAdditionalSellerInputs operation.
     * @callback module:client/apis/MerchantFulfillmentApi~getAdditionalSellerInputsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetAdditionalSellerInputsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~getAdditionalSellerInputsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetAdditionalSellerInputsResponse}
     */
    getAdditionalSellerInputs(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetAdditionalSellerInputsResponse;

      return this.apiClient.callApi(
        '/mfn/v0/additionalSellerInputs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getAdditionalSellerInputsOld operation.
     * @callback module:client/apis/MerchantFulfillmentApi~getAdditionalSellerInputsOldCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetAdditionalSellerInputsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~getAdditionalSellerInputsOldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetAdditionalSellerInputsResponse}
     */
    getAdditionalSellerInputsOld(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetAdditionalSellerInputsResponse;

      return this.apiClient.callApi(
        '/mfn/v0/sellerInputs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getEligibleShipmentServices operation.
     * @callback module:client/apis/MerchantFulfillmentApi~getEligibleShipmentServicesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetEligibleShipmentServicesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~getEligibleShipmentServicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetEligibleShipmentServicesResponse}
     */
    getEligibleShipmentServices(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetEligibleShipmentServicesResponse;

      return this.apiClient.callApi(
        '/mfn/v0/eligibleShippingServices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getEligibleShipmentServicesOld operation.
     * @callback module:client/apis/MerchantFulfillmentApi~getEligibleShipmentServicesOldCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetEligibleShipmentServicesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~getEligibleShipmentServicesOldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetEligibleShipmentServicesResponse}
     */
    getEligibleShipmentServicesOld(body, callback) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetEligibleShipmentServicesResponse;

      return this.apiClient.callApi(
        '/mfn/v0/eligibleServices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getShipment operation.
     * @callback module:client/apis/MerchantFulfillmentApi~getShipmentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetShipmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the shipment information for an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/MerchantFulfillmentApi~getShipmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetShipmentResponse}
     */
    getShipment(shipmentId, callback) {
      let postBody = null;

      let pathParams = {
        'shipmentId': shipmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetShipmentResponse;

      return this.apiClient.callApi(
        '/mfn/v0/shipments/{shipmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
