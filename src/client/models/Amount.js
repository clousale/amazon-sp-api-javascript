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
import BigDecimalType from './BigDecimalType';
import CurrencyCode from './CurrencyCode';

/**
* The Amount model module.
* @module client/models/Amount
* @version v0
*/
export default class Amount {
    /**
    * Constructs a new <code>Amount</code>.
    * The monetary value.
    * @alias module:client/models/Amount
    * @class
    * @param currencyCode {module:client/models/CurrencyCode} 
    * @param value {module:client/models/BigDecimalType} 
    */

    constructor(currencyCode, value) {
        
        
        this['CurrencyCode'] = currencyCode;
        this['Value'] = value;
        
    }

    /**
    * Constructs a <code>Amount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Amount} obj Optional instance to populate.
    * @return {module:client/models/Amount} The populated <code>Amount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Amount();
                        
            
            if (data.hasOwnProperty('CurrencyCode')) {
                obj['CurrencyCode'] = CurrencyCode.constructFromObject(data['CurrencyCode']);
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = BigDecimalType.constructFromObject(data['Value']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/CurrencyCode} CurrencyCode
    */
    'CurrencyCode' = undefined;
    /**
    * @member {module:client/models/BigDecimalType} Value
    */
    'Value' = undefined;




}