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
import TaxWithheldComponentList from './TaxWithheldComponentList';

/**
* The RetrochargeEvent model module.
* @module client/models/RetrochargeEvent
* @version v0
*/
export default class RetrochargeEvent {
    /**
    * Constructs a new <code>RetrochargeEvent</code>.
    * A retrocharge or retrocharge reversal.
    * @alias module:client/models/RetrochargeEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RetrochargeEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RetrochargeEvent} obj Optional instance to populate.
    * @return {module:client/models/RetrochargeEvent} The populated <code>RetrochargeEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrochargeEvent();
                        
            
            if (data.hasOwnProperty('RetrochargeEventType')) {
                obj['RetrochargeEventType'] = ApiClient.convertToType(data['RetrochargeEventType'], 'String');
            }
            if (data.hasOwnProperty('AmazonOrderId')) {
                obj['AmazonOrderId'] = ApiClient.convertToType(data['AmazonOrderId'], 'String');
            }
            if (data.hasOwnProperty('PostedDate')) {
                obj['PostedDate'] = ModelDate.constructFromObject(data['PostedDate']);
            }
            if (data.hasOwnProperty('BaseTax')) {
                obj['BaseTax'] = Currency.constructFromObject(data['BaseTax']);
            }
            if (data.hasOwnProperty('ShippingTax')) {
                obj['ShippingTax'] = Currency.constructFromObject(data['ShippingTax']);
            }
            if (data.hasOwnProperty('MarketplaceName')) {
                obj['MarketplaceName'] = ApiClient.convertToType(data['MarketplaceName'], 'String');
            }
            if (data.hasOwnProperty('RetrochargeTaxWithheldList')) {
                obj['RetrochargeTaxWithheldList'] = TaxWithheldComponentList.constructFromObject(data['RetrochargeTaxWithheldList']);
            }
        }
        return obj;
    }

    /**
    * The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal
    * @member {String} RetrochargeEventType
    */
    'RetrochargeEventType' = undefined;
    /**
    * An Amazon-defined identifier for an order.
    * @member {String} AmazonOrderId
    */
    'AmazonOrderId' = undefined;
    /**
    * @member {module:client/models/ModelDate} PostedDate
    */
    'PostedDate' = undefined;
    /**
    * @member {module:client/models/Currency} BaseTax
    */
    'BaseTax' = undefined;
    /**
    * @member {module:client/models/Currency} ShippingTax
    */
    'ShippingTax' = undefined;
    /**
    * The name of the marketplace where the retrocharge event occurred.
    * @member {String} MarketplaceName
    */
    'MarketplaceName' = undefined;
    /**
    * @member {module:client/models/TaxWithheldComponentList} RetrochargeTaxWithheldList
    */
    'RetrochargeTaxWithheldList' = undefined;




}
