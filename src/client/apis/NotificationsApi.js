/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CreateDestinationRequest from '../models/CreateDestinationRequest';
import CreateDestinationResponse from '../models/CreateDestinationResponse';
import CreateSubscriptionRequest from '../models/CreateSubscriptionRequest';
import CreateSubscriptionResponse from '../models/CreateSubscriptionResponse';
import DeleteDestinationResponse from '../models/DeleteDestinationResponse';
import DeleteSubscriptionByIdResponse from '../models/DeleteSubscriptionByIdResponse';
import GetDestinationResponse from '../models/GetDestinationResponse';
import GetDestinationsResponse from '../models/GetDestinationsResponse';
import GetSubscriptionByIdResponse from '../models/GetSubscriptionByIdResponse';
import GetSubscriptionResponse from '../models/GetSubscriptionResponse';

/**
* Notifications service.
* @module client/apis/NotificationsApi
* @version v1
*/
export default class NotificationsApi {

    /**
    * Constructs a new NotificationsApi. 
    * @alias module:client/apis/NotificationsApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createDestination operation.
     * @callback module:client/apis/NotificationsApi~createDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateDestinationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a destination resource to receive notifications. The createDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~createDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateDestinationResponse}
     */
    createDestination(body, callback) {
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
      let accepts = ['application/json', 'Successful Response'];
      let returnType = CreateDestinationResponse;

      return this.apiClient.callApi(
        '/notifications/v1/destinations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:client/apis/NotificationsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the createDestination operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateSubscriptionResponse}
     */
    createSubscription(body, notificationType, callback) {
      let postBody = body;

      let pathParams = {
        'notificationType': notificationType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = CreateSubscriptionResponse;

      return this.apiClient.callApi(
        '/notifications/v1/subscriptions/{notificationType}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteDestination operation.
     * @callback module:client/apis/NotificationsApi~deleteDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/DeleteDestinationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the destination that you specify. The deleteDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~deleteDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/DeleteDestinationResponse}
     */
    deleteDestination(destinationId, callback) {
      let postBody = null;

      let pathParams = {
        'destinationId': destinationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = DeleteDestinationResponse;

      return this.apiClient.callApi(
        '/notifications/v1/destinations/{destinationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteSubscriptionById operation.
     * @callback module:client/apis/NotificationsApi~deleteSubscriptionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/DeleteSubscriptionByIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The deleteSubscriptionById API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~deleteSubscriptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/DeleteSubscriptionByIdResponse}
     */
    deleteSubscriptionById(subscriptionId, notificationType, callback) {
      let postBody = null;

      let pathParams = {
        'subscriptionId': subscriptionId,
        'notificationType': notificationType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Operation Response'];
      let returnType = DeleteSubscriptionByIdResponse;

      return this.apiClient.callApi(
        '/notifications/v1/subscriptions/{notificationType}/{subscriptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDestination operation.
     * @callback module:client/apis/NotificationsApi~getDestinationCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetDestinationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about the destination that you specify. The getDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~getDestinationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetDestinationResponse}
     */
    getDestination(destinationId, callback) {
      let postBody = null;

      let pathParams = {
        'destinationId': destinationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = GetDestinationResponse;

      return this.apiClient.callApi(
        '/notifications/v1/destinations/{destinationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDestinations operation.
     * @callback module:client/apis/NotificationsApi~getDestinationsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetDestinationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about all destinations. The getDestinations API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~getDestinationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetDestinationsResponse}
     */
    getDestinations(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = GetDestinationsResponse;

      return this.apiClient.callApi(
        '/notifications/v1/destinations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:client/apis/NotificationsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about subscriptions of the specified notification type. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetSubscriptionResponse}
     */
    getSubscription(notificationType, callback) {
      let postBody = null;

      let pathParams = {
        'notificationType': notificationType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = GetSubscriptionResponse;

      return this.apiClient.callApi(
        '/notifications/v1/subscriptions/{notificationType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSubscriptionById operation.
     * @callback module:client/apis/NotificationsApi~getSubscriptionByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetSubscriptionByIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about a subscription for the specified notification type. The getSubscriptionById API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/NotificationsApi~getSubscriptionByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetSubscriptionByIdResponse}
     */
    getSubscriptionById(subscriptionId, notificationType, callback) {
      let postBody = null;

      let pathParams = {
        'subscriptionId': subscriptionId,
        'notificationType': notificationType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'Successful Response'];
      let returnType = GetSubscriptionByIdResponse;

      return this.apiClient.callApi(
        '/notifications/v1/subscriptions/{notificationType}/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}