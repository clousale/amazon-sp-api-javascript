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
import ModelDate from './ModelDate';

/**
* The TDSReimbursementEvent model module.
* @module client/models/TDSReimbursementEvent
* @version v0
*/
export default class TDSReimbursementEvent {
    /**
    * Constructs a new <code>TDSReimbursementEvent</code>.
    * A tax deduction at source (TDS) claim reimbursement event on the seller&#x27;s account.
    * @alias module:client/models/TDSReimbursementEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>TDSReimbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/TDSReimbursementEvent} obj Optional instance to populate.
    * @return {module:client/models/TDSReimbursementEvent} The populated <code>TDSReimbursementEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TDSReimbursementEvent();
                        
            
            if (data.hasOwnProperty('PostedDate')) {
                obj['PostedDate'] = ModelDate.constructFromObject(data['PostedDate']);
            }
            if (data.hasOwnProperty('TdsOrderId')) {
                obj['TdsOrderId'] = ApiClient.convertToType(data['TdsOrderId'], 'String');
            }
            if (data.hasOwnProperty('ReimbursedAmount')) {
                obj['ReimbursedAmount'] = Currency.constructFromObject(data['ReimbursedAmount']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ModelDate} PostedDate
    */
    'PostedDate' = undefined;
    /**
    * A tax deduction at source (TDS) claim identifier.
    * @member {String} TdsOrderId
    */
    'TdsOrderId' = undefined;
    /**
    * @member {module:client/models/Currency} ReimbursedAmount
    */
    'ReimbursedAmount' = undefined;




}