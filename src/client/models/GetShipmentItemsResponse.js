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

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import GetShipmentItemsResult from './GetShipmentItemsResult';

/**
* The GetShipmentItemsResponse model module.
* @module client/models/GetShipmentItemsResponse
* @version v0
*/
export default class GetShipmentItemsResponse {
    /**
    * Constructs a new <code>GetShipmentItemsResponse</code>.
    * The response schema for the getShipmentItems operation.
    * @alias module:client/models/GetShipmentItemsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetShipmentItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetShipmentItemsResponse} obj Optional instance to populate.
    * @return {module:client/models/GetShipmentItemsResponse} The populated <code>GetShipmentItemsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShipmentItemsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GetShipmentItemsResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetShipmentItemsResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
