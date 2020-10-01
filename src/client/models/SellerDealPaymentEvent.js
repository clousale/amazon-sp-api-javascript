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
* The SellerDealPaymentEvent model module.
* @module client/models/SellerDealPaymentEvent
* @version v0
*/
export default class SellerDealPaymentEvent {
    /**
    * Constructs a new <code>SellerDealPaymentEvent</code>.
    * An event linked to the payment of a fee related to the specified deal.
    * @alias module:client/models/SellerDealPaymentEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SellerDealPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SellerDealPaymentEvent} obj Optional instance to populate.
    * @return {module:client/models/SellerDealPaymentEvent} The populated <code>SellerDealPaymentEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellerDealPaymentEvent();
                        
            
            if (data.hasOwnProperty('postedDate')) {
                obj['postedDate'] = ModelDate.constructFromObject(data['postedDate']);
            }
            if (data.hasOwnProperty('dealId')) {
                obj['dealId'] = ApiClient.convertToType(data['dealId'], 'String');
            }
            if (data.hasOwnProperty('dealDescription')) {
                obj['dealDescription'] = ApiClient.convertToType(data['dealDescription'], 'String');
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
            }
            if (data.hasOwnProperty('feeType')) {
                obj['feeType'] = ApiClient.convertToType(data['feeType'], 'String');
            }
            if (data.hasOwnProperty('feeAmount')) {
                obj['feeAmount'] = Currency.constructFromObject(data['feeAmount']);
            }
            if (data.hasOwnProperty('taxAmount')) {
                obj['taxAmount'] = Currency.constructFromObject(data['taxAmount']);
            }
            if (data.hasOwnProperty('totalAmount')) {
                obj['totalAmount'] = Currency.constructFromObject(data['totalAmount']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ModelDate} postedDate
    */
    'postedDate' = undefined;
    /**
    * The unique identifier of the deal.
    * @member {String} dealId
    */
    'dealId' = undefined;
    /**
    * The internal description of the deal.
    * @member {String} dealDescription
    */
    'dealDescription' = undefined;
    /**
    * The type of event: SellerDealComplete.
    * @member {String} eventType
    */
    'eventType' = undefined;
    /**
    * The type of fee: RunLightningDealFee.
    * @member {String} feeType
    */
    'feeType' = undefined;
    /**
    * @member {module:client/models/Currency} feeAmount
    */
    'feeAmount' = undefined;
    /**
    * @member {module:client/models/Currency} taxAmount
    */
    'taxAmount' = undefined;
    /**
    * @member {module:client/models/Currency} totalAmount
    */
    'totalAmount' = undefined;




}