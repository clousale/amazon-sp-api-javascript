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

import ApiClient from '../ApiClient';
import DestinationList from './DestinationList';
import ErrorList from './ErrorList';

/**
* The GetDestinationsResponse model module.
* @module client/models/GetDestinationsResponse
* @version v1
*/
export default class GetDestinationsResponse {
    /**
    * Constructs a new <code>GetDestinationsResponse</code>.
    * The response schema for the getDestinations operation.
    * @alias module:client/models/GetDestinationsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetDestinationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetDestinationsResponse} obj Optional instance to populate.
    * @return {module:client/models/GetDestinationsResponse} The populated <code>GetDestinationsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDestinationsResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = DestinationList.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/DestinationList} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}