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
* The Promotion model module.
* @module client/models/Promotion
* @version v0
*/
export default class Promotion {
    /**
    * Constructs a new <code>Promotion</code>.
    * A promotion applied to an item.
    * @alias module:client/models/Promotion
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Promotion} obj Optional instance to populate.
    * @return {module:client/models/Promotion} The populated <code>Promotion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Promotion();
                        
            
            if (data.hasOwnProperty('PromotionType')) {
                obj['PromotionType'] = ApiClient.convertToType(data['PromotionType'], 'String');
            }
            if (data.hasOwnProperty('PromotionId')) {
                obj['PromotionId'] = ApiClient.convertToType(data['PromotionId'], 'String');
            }
            if (data.hasOwnProperty('PromotionAmount')) {
                obj['PromotionAmount'] = Currency.constructFromObject(data['PromotionAmount']);
            }
        }
        return obj;
    }

    /**
    * The type of promotion.
    * @member {String} PromotionType
    */
    'PromotionType' = undefined;
    /**
    * The seller-specified identifier for the promotion.
    * @member {String} PromotionId
    */
    'PromotionId' = undefined;
    /**
    * @member {module:client/models/Currency} PromotionAmount
    */
    'PromotionAmount' = undefined;




}
