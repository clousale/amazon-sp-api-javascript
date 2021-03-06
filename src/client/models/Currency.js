/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
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
* The Currency model module.
* @module client/models/Currency
* @version v1
*/
export default class Currency {
    /**
    * Constructs a new <code>Currency</code>.
    * The total value of all items in the container.
    * @alias module:client/models/Currency
    * @class
    * @param value {Number} The amount of currency.
    * @param unit {String} A 3-character currency code.
    */

    constructor(value, unit) {
        
        
        this['value'] = value;
        this['unit'] = unit;
        
    }

    /**
    * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Currency} obj Optional instance to populate.
    * @return {module:client/models/Currency} The populated <code>Currency</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();
                        
            
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }

    /**
    * The amount of currency.
    * @member {Number} value
    */
    'value' = undefined;
    /**
    * A 3-character currency code.
    * @member {String} unit
    */
    'unit' = undefined;




}
