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
import CommonTransportResult from './CommonTransportResult';
import ErrorList from './ErrorList';

/**
* The PutTransportDetailsResponse model module.
* @module client/models/PutTransportDetailsResponse
* @version v0
*/
export default class PutTransportDetailsResponse {
    /**
    * Constructs a new <code>PutTransportDetailsResponse</code>.
    * Workflow status for a shipment with an Amazon-partnered carrier.
    * @alias module:client/models/PutTransportDetailsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PutTransportDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PutTransportDetailsResponse} obj Optional instance to populate.
    * @return {module:client/models/PutTransportDetailsResponse} The populated <code>PutTransportDetailsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTransportDetailsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = CommonTransportResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/CommonTransportResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
