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

import ApiClient from '../ApiClient';
import ErrorList from './ErrorList';
import GetEligibleShipmentServicesResult from './GetEligibleShipmentServicesResult';

/**
* The GetEligibleShipmentServicesResponse model module.
* @module client/models/GetEligibleShipmentServicesResponse
* @version v0
*/
export default class GetEligibleShipmentServicesResponse {
    /**
    * Constructs a new <code>GetEligibleShipmentServicesResponse</code>.
    * Response schema.
    * @alias module:client/models/GetEligibleShipmentServicesResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetEligibleShipmentServicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetEligibleShipmentServicesResponse} obj Optional instance to populate.
    * @return {module:client/models/GetEligibleShipmentServicesResponse} The populated <code>GetEligibleShipmentServicesResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEligibleShipmentServicesResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = GetEligibleShipmentServicesResult.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/GetEligibleShipmentServicesResult} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}
