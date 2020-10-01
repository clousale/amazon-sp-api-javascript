/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import Currency from './Currency';

/**
* The ChargeInstrument model module.
* @module client/models/ChargeInstrument
* @version v0
*/
export default class ChargeInstrument {
    /**
    * Constructs a new <code>ChargeInstrument</code>.
    * A payment instrument.
    * @alias module:client/models/ChargeInstrument
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ChargeInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ChargeInstrument} obj Optional instance to populate.
    * @return {module:client/models/ChargeInstrument} The populated <code>ChargeInstrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeInstrument();
                        
            
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Tail')) {
                obj['Tail'] = ApiClient.convertToType(data['Tail'], 'String');
            }
            if (data.hasOwnProperty('Amount')) {
                obj['Amount'] = Currency.constructFromObject(data['Amount']);
            }
        }
        return obj;
    }

    /**
    * A short description of the charge instrument.
    * @member {String} Description
    */
    'Description' = undefined;
    /**
    * The account tail (trailing digits) of the charge instrument.
    * @member {String} Tail
    */
    'Tail' = undefined;
    /**
    * @member {module:client/models/Currency} Amount
    */
    'Amount' = undefined;




}