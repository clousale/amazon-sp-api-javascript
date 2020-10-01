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
import ErrorReason from './ErrorReason';

/**
* The InvalidASIN model module.
* @module client/models/InvalidASIN
* @version v0
*/
export default class InvalidASIN {
    /**
    * Constructs a new <code>InvalidASIN</code>.
    * @alias module:client/models/InvalidASIN
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InvalidASIN</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InvalidASIN} obj Optional instance to populate.
    * @return {module:client/models/InvalidASIN} The populated <code>InvalidASIN</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvalidASIN();
                        
            
            if (data.hasOwnProperty('ASIN')) {
                obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
            }
            if (data.hasOwnProperty('ErrorReason')) {
                obj['ErrorReason'] = ErrorReason.constructFromObject(data['ErrorReason']);
            }
        }
        return obj;
    }

    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} ASIN
    */
    'ASIN' = undefined;
    /**
    * @member {module:client/models/ErrorReason} ErrorReason
    */
    'ErrorReason' = undefined;




}
