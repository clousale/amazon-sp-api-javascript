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
import DestinationResource from './DestinationResource';

/**
* The Destination model module.
* @module client/models/Destination
* @version v1
*/
export default class Destination {
    /**
    * Constructs a new <code>Destination</code>.
    * Represents a destination created when you call the createDestination operation.
    * @alias module:client/models/Destination
    * @class
    * @param name {String} The developer-defined name for this destination.
    * @param destinationId {String} The destination identifier generated when you created the destination.
    * @param resource {module:client/models/DestinationResource} 
    */

    constructor(name, destinationId, resource) {
        
        
        this['name'] = name;
        this['destinationId'] = destinationId;
        this['resource'] = resource;
        
    }

    /**
    * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Destination} obj Optional instance to populate.
    * @return {module:client/models/Destination} The populated <code>Destination</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Destination();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('destinationId')) {
                obj['destinationId'] = ApiClient.convertToType(data['destinationId'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = DestinationResource.constructFromObject(data['resource']);
            }
        }
        return obj;
    }

    /**
    * The developer-defined name for this destination.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The destination identifier generated when you created the destination.
    * @member {String} destinationId
    */
    'destinationId' = undefined;
    /**
    * @member {module:client/models/DestinationResource} resource
    */
    'resource' = undefined;




}
