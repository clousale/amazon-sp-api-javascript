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
* The ProductAdsPaymentEvent model module.
* @module client/models/ProductAdsPaymentEvent
* @version v0
*/
export default class ProductAdsPaymentEvent {
    /**
    * Constructs a new <code>ProductAdsPaymentEvent</code>.
    * A Sponsored Products payment event.
    * @alias module:client/models/ProductAdsPaymentEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProductAdsPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/ProductAdsPaymentEvent} obj Optional instance to populate.
    * @return {module:client/models/ProductAdsPaymentEvent} The populated <code>ProductAdsPaymentEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductAdsPaymentEvent();
                        
            
            if (data.hasOwnProperty('postedDate')) {
                obj['postedDate'] = ModelDate.constructFromObject(data['postedDate']);
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('invoiceId')) {
                obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
            }
            if (data.hasOwnProperty('baseValue')) {
                obj['baseValue'] = Currency.constructFromObject(data['baseValue']);
            }
            if (data.hasOwnProperty('taxValue')) {
                obj['taxValue'] = Currency.constructFromObject(data['taxValue']);
            }
            if (data.hasOwnProperty('transactionValue')) {
                obj['transactionValue'] = Currency.constructFromObject(data['transactionValue']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ModelDate} postedDate
    */
    'postedDate' = undefined;
    /**
    * Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund
    * @member {String} transactionType
    */
    'transactionType' = undefined;
    /**
    * Identifier for the invoice that the transaction appears in.
    * @member {String} invoiceId
    */
    'invoiceId' = undefined;
    /**
    * @member {module:client/models/Currency} baseValue
    */
    'baseValue' = undefined;
    /**
    * @member {module:client/models/Currency} taxValue
    */
    'taxValue' = undefined;
    /**
    * @member {module:client/models/Currency} transactionValue
    */
    'transactionValue' = undefined;




}
