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
import ErrorList from './ErrorList';
import Subscription from './Subscription';

/**
* The CreateSubscriptionResponse model module.
* @module client/models/CreateSubscriptionResponse
* @version v1
*/
export default class CreateSubscriptionResponse {
    /**
    * Constructs a new <code>CreateSubscriptionResponse</code>.
    * The response schema for the createSubscription operation.
    * @alias module:client/models/CreateSubscriptionResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateSubscriptionResponse} obj Optional instance to populate.
    * @return {module:client/models/CreateSubscriptionResponse} The populated <code>CreateSubscriptionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubscriptionResponse();
                        
            
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = Subscription.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorList.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Subscription} payload
    */
    'payload' = undefined;
    /**
    * @member {module:client/models/ErrorList} errors
    */
    'errors' = undefined;




}