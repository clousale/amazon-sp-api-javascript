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
import EventBridgeResourceSpecification from './EventBridgeResourceSpecification';
import SqsResource from './SqsResource';

/**
* The DestinationResourceSpecification model module.
* @module client/models/DestinationResourceSpecification
* @version v1
*/
export default class DestinationResourceSpecification {
    /**
    * Constructs a new <code>DestinationResourceSpecification</code>.
    * The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination.
    * @alias module:client/models/DestinationResourceSpecification
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DestinationResourceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/DestinationResourceSpecification} obj Optional instance to populate.
    * @return {module:client/models/DestinationResourceSpecification} The populated <code>DestinationResourceSpecification</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DestinationResourceSpecification();
                        
            
            if (data.hasOwnProperty('sqs')) {
                obj['sqs'] = SqsResource.constructFromObject(data['sqs']);
            }
            if (data.hasOwnProperty('eventBridge')) {
                obj['eventBridge'] = EventBridgeResourceSpecification.constructFromObject(data['eventBridge']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/SqsResource} sqs
    */
    'sqs' = undefined;
    /**
    * @member {module:client/models/EventBridgeResourceSpecification} eventBridge
    */
    'eventBridge' = undefined;




}
