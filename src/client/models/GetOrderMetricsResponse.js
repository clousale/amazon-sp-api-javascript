/**
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import OrderMetricsList from './OrderMetricsList';

/**
* The GetOrderMetricsResponse model module.
* @module client/models/GetOrderMetricsResponse
* @version v1
*/
export default class GetOrderMetricsResponse {
    /**
    * Constructs a new <code>GetOrderMetricsResponse</code>.
    * The response schema for the getOrderMetrics operation.
    * @alias module:client/models/GetOrderMetricsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetOrderMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetOrderMetricsResponse} obj Optional instance to populate.
    * @return {module:client/models/GetOrderMetricsResponse} The populated <code>GetOrderMetricsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOrderMetricsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = OrderMetricsList.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/OrderMetricsList} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}