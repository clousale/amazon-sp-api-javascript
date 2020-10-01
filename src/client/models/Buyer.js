/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
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

/**
* The Buyer model module.
* @module client/models/Buyer
* @version v1
*/
export default class Buyer {
    /**
    * Constructs a new <code>Buyer</code>.
    * Information about the buyer.
    * @alias module:client/models/Buyer
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Buyer</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Buyer} obj Optional instance to populate.
    * @return {module:client/models/Buyer} The populated <code>Buyer</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Buyer();
                        
            
            if (data.hasOwnProperty('buyerId')) {
                obj['buyerId'] = ApiClient.convertToType(data['buyerId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('isPrimeMember')) {
                obj['isPrimeMember'] = ApiClient.convertToType(data['isPrimeMember'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The identifier of the buyer.
    * @member {String} buyerId
    */
    'buyerId' = undefined;
    /**
    * The name of the buyer.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The phone number of the buyer.
    * @member {String} phone
    */
    'phone' = undefined;
    /**
    * When true, the service is for an Amazon Prime buyer.
    * @member {Boolean} isPrimeMember
    */
    'isPrimeMember' = undefined;




}
