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
import EventBridgeResource from './EventBridgeResource';
import SqsResource from './SqsResource';

/**
* The DestinationResource model module.
* @module client/models/DestinationResource
* @version v1
*/
export default class DestinationResource {
    /**
    * Constructs a new <code>DestinationResource</code>.
    * The destination resource types.
    * @alias module:client/models/DestinationResource
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DestinationResource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/DestinationResource} obj Optional instance to populate.
    * @return {module:client/models/DestinationResource} The populated <code>DestinationResource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DestinationResource();
                        
            
            if (data.hasOwnProperty('sqs')) {
                obj['sqs'] = SqsResource.constructFromObject(data['sqs']);
            }
            if (data.hasOwnProperty('eventBridge')) {
                obj['eventBridge'] = EventBridgeResource.constructFromObject(data['eventBridge']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/SqsResource} sqs
    */
    'sqs' = undefined;
    /**
    * @member {module:client/models/EventBridgeResource} eventBridge
    */
    'eventBridge' = undefined;




}
