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
import DestinationResourceSpecification from './DestinationResourceSpecification';

/**
* The CreateDestinationRequest model module.
* @module client/models/CreateDestinationRequest
* @version v1
*/
export default class CreateDestinationRequest {
    /**
    * Constructs a new <code>CreateDestinationRequest</code>.
    * The request schema for the createDestination operation.
    * @alias module:client/models/CreateDestinationRequest
    * @class
    * @param resourceSpecification {module:client/models/DestinationResourceSpecification} 
    * @param name {String} A developer-defined name to help identify this destination.
    */

    constructor(resourceSpecification, name) {
        
        
        this['resourceSpecification'] = resourceSpecification;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>CreateDestinationRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateDestinationRequest} obj Optional instance to populate.
    * @return {module:client/models/CreateDestinationRequest} The populated <code>CreateDestinationRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDestinationRequest();
                        
            
            if (data.hasOwnProperty('resourceSpecification')) {
                obj['resourceSpecification'] = DestinationResourceSpecification.constructFromObject(data['resourceSpecification']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/DestinationResourceSpecification} resourceSpecification
    */
    'resourceSpecification' = undefined;
    /**
    * A developer-defined name to help identify this destination.
    * @member {String} name
    */
    'name' = undefined;




}