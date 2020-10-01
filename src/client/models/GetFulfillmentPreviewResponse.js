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

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import GetFulfillmentPreviewResult from './GetFulfillmentPreviewResult';

/**
* The GetFulfillmentPreviewResponse model module.
* @module client/models/GetFulfillmentPreviewResponse
* @version v0
*/
export default class GetFulfillmentPreviewResponse {
    /**
    * Constructs a new <code>GetFulfillmentPreviewResponse</code>.
    * The response schema for the getFulfillmentPreview operation.
    * @alias module:client/models/GetFulfillmentPreviewResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetFulfillmentPreviewResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetFulfillmentPreviewResponse} obj Optional instance to populate.
    * @return {module:client/models/GetFulfillmentPreviewResponse} The populated <code>GetFulfillmentPreviewResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFulfillmentPreviewResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GetFulfillmentPreviewResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetFulfillmentPreviewResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
