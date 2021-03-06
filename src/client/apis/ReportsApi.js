/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import CancelReportResponse from '../models/CancelReportResponse';
import CancelReportScheduleResponse from '../models/CancelReportScheduleResponse';
import CreateReportResponse from '../models/CreateReportResponse';
import CreateReportScheduleResponse from '../models/CreateReportScheduleResponse';
import CreateReportScheduleSpecification from '../models/CreateReportScheduleSpecification';
import CreateReportSpecification from '../models/CreateReportSpecification';
import GetReportDocumentResponse from '../models/GetReportDocumentResponse';
import GetReportResponse from '../models/GetReportResponse';
import GetReportScheduleResponse from '../models/GetReportScheduleResponse';
import GetReportSchedulesResponse from '../models/GetReportSchedulesResponse';
import GetReportsResponse from '../models/GetReportsResponse';

/**
* Reports service.
* @module client/apis/ReportsApi
* @version 2020-09-04
*/
export default class ReportsApi {

    /**
    * Constructs a new ReportsApi. 
    * @alias module:client/apis/ReportsApi
    * @class
    * @param {module:client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cancelReport operation.
     * @callback module:client/apis/ReportsApi~cancelReportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CancelReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels the report that you specify. Only reports with processingStatus&#x3D;IN_QUEUE can be cancelled. Cancelled reports are returned in subsequent calls to the getReport and getReports operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~cancelReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CancelReportResponse}
     */
    cancelReport(reportId, callback) {
      let postBody = null;

      let pathParams = {
        'reportId': reportId
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
      let returnType = CancelReportResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/reports/{reportId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cancelReportSchedule operation.
     * @callback module:client/apis/ReportsApi~cancelReportScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CancelReportScheduleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancels the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~cancelReportScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CancelReportScheduleResponse}
     */
    cancelReportSchedule(reportScheduleId, callback) {
      let postBody = null;

      let pathParams = {
        'reportScheduleId': reportScheduleId
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
      let returnType = CancelReportScheduleResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/schedules/{reportScheduleId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createReport operation.
     * @callback module:client/apis/ReportsApi~createReportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a report.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~createReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateReportResponse}
     */
    createReport(body, callback) {
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
      let returnType = CreateReportResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/reports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createReportSchedule operation.
     * @callback module:client/apis/ReportsApi~createReportScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/CreateReportScheduleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~createReportScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/CreateReportScheduleResponse}
     */
    createReportSchedule(body, callback) {
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
      let returnType = CreateReportScheduleResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/schedules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReport operation.
     * @callback module:client/apis/ReportsApi~getReportCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns report details (including the reportDocumentId, if available) for the report that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~getReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetReportResponse}
     */
    getReport(reportId, callback) {
      let postBody = null;

      let pathParams = {
        'reportId': reportId
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
      let returnType = GetReportResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/reports/{reportId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReportDocument operation.
     * @callback module:client/apis/ReportsApi~getReportDocumentCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetReportDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the information required for retrieving a report document&#x27;s contents. This includes a presigned URL for the report document as well as the information required to decrypt the document&#x27;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~getReportDocumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetReportDocumentResponse}
     */
    getReportDocument(reportDocumentId, callback) {
      let postBody = null;

      let pathParams = {
        'reportDocumentId': reportDocumentId
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
      let returnType = GetReportDocumentResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/documents/{reportDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReportSchedule operation.
     * @callback module:client/apis/ReportsApi~getReportScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetReportScheduleResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns report schedule details for the report schedule that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~getReportScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetReportScheduleResponse}
     */
    getReportSchedule(reportScheduleId, callback) {
      let postBody = null;

      let pathParams = {
        'reportScheduleId': reportScheduleId
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
      let returnType = GetReportScheduleResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/schedules/{reportScheduleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReportSchedules operation.
     * @callback module:client/apis/ReportsApi~getReportSchedulesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetReportSchedulesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns report schedule details that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {module:client/apis/ReportsApi~getReportSchedulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetReportSchedulesResponse}
     */
    getReportSchedules(reportTypes, callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'reportTypes': this.apiClient.buildCollectionParam(reportTypes, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetReportSchedulesResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/schedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReports operation.
     * @callback module:client/apis/ReportsApi~getReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:client/models/GetReportsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns report details for the reports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
     * @param {Object} opts Optional parameters
     * @param {module:client/apis/ReportsApi~getReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/models/GetReportsResponse}
     */
    getReports(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'reportTypes': this.apiClient.buildCollectionParam(opts['reportTypes'], 'csv'),
        'processingStatuses': this.apiClient.buildCollectionParam(opts['processingStatuses'], 'csv'),
        'marketplaceIds': this.apiClient.buildCollectionParam(opts['marketplaceIds'], 'csv'),
        'pageSize': opts['pageSize'],
        'createdSince': opts['createdSince'],
        'createdUntil': opts['createdUntil'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetReportsResponse;

      return this.apiClient.callApi(
        '/reports/2020-09-04/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
