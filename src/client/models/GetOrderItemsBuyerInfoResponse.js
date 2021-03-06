/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import OrderItemsBuyerInfoList from './OrderItemsBuyerInfoList';

/**
* The GetOrderItemsBuyerInfoResponse model module.
* @module client/models/GetOrderItemsBuyerInfoResponse
* @version v0
*/
export default class GetOrderItemsBuyerInfoResponse {
    /**
    * Constructs a new <code>GetOrderItemsBuyerInfoResponse</code>.
    * The response schema for the getOrderItemsBuyerInfo operation.
    * @alias module:client/models/GetOrderItemsBuyerInfoResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetOrderItemsBuyerInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetOrderItemsBuyerInfoResponse} obj Optional instance to populate.
    * @return {module:client/models/GetOrderItemsBuyerInfoResponse} The populated <code>GetOrderItemsBuyerInfoResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOrderItemsBuyerInfoResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = OrderItemsBuyerInfoList.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/OrderItemsBuyerInfoList} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
