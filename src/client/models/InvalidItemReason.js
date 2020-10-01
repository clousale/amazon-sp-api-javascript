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
import InvalidItemReasonCode from './InvalidItemReasonCode';

/**
* The InvalidItemReason model module.
* @module client/models/InvalidItemReason
* @version v0
*/
export default class InvalidItemReason {
    /**
    * Constructs a new <code>InvalidItemReason</code>.
    * The reason that the item is invalid for return.
    * @alias module:client/models/InvalidItemReason
    * @class
    * @param invalidItemReasonCode {module:client/models/InvalidItemReasonCode} 
    * @param description {String} A human readable description of the invalid item reason code.
    */

    constructor(invalidItemReasonCode, description) {
        
        
        this['InvalidItemReasonCode'] = invalidItemReasonCode;
        this['Description'] = description;
        
    }

    /**
    * Constructs a <code>InvalidItemReason</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InvalidItemReason} obj Optional instance to populate.
    * @return {module:client/models/InvalidItemReason} The populated <code>InvalidItemReason</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvalidItemReason();
                        
            
            if (data.hasOwnProperty('InvalidItemReasonCode')) {
                obj['InvalidItemReasonCode'] = InvalidItemReasonCode.constructFromObject(data['InvalidItemReasonCode']);
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/InvalidItemReasonCode} InvalidItemReasonCode
    */
    'InvalidItemReasonCode' = undefined;
    /**
    * A human readable description of the invalid item reason code.
    * @member {String} Description
    */
    'Description' = undefined;




}