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
* The FBALiquidationEvent model module.
* @module client/models/FBALiquidationEvent
* @version v0
*/
export default class FBALiquidationEvent {
    /**
    * Constructs a new <code>FBALiquidationEvent</code>.
    * A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace.
    * @alias module:client/models/FBALiquidationEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>FBALiquidationEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FBALiquidationEvent} obj Optional instance to populate.
    * @return {module:client/models/FBALiquidationEvent} The populated <code>FBALiquidationEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FBALiquidationEvent();
                        
            
            if (data.hasOwnProperty('PostedDate')) {
                obj['PostedDate'] = ModelDate.constructFromObject(data['PostedDate']);
            }
            if (data.hasOwnProperty('OriginalRemovalOrderId')) {
                obj['OriginalRemovalOrderId'] = ApiClient.convertToType(data['OriginalRemovalOrderId'], 'String');
            }
            if (data.hasOwnProperty('LiquidationProceedsAmount')) {
                obj['LiquidationProceedsAmount'] = Currency.constructFromObject(data['LiquidationProceedsAmount']);
            }
            if (data.hasOwnProperty('LiquidationFeeAmount')) {
                obj['LiquidationFeeAmount'] = Currency.constructFromObject(data['LiquidationFeeAmount']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ModelDate} PostedDate
    */
    'PostedDate' = undefined;
    /**
    * The identifier for the original removal order.
    * @member {String} OriginalRemovalOrderId
    */
    'OriginalRemovalOrderId' = undefined;
    /**
    * @member {module:client/models/Currency} LiquidationProceedsAmount
    */
    'LiquidationProceedsAmount' = undefined;
    /**
    * @member {module:client/models/Currency} LiquidationFeeAmount
    */
    'LiquidationFeeAmount' = undefined;




}
