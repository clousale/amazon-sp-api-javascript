/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import MoneyType from './MoneyType';
import PriceType from './PriceType';

/**
* The OfferType model module.
* @module client/models/OfferType
* @version v0
*/
export default class OfferType {
    /**
    * Constructs a new <code>OfferType</code>.
    * @alias module:client/models/OfferType
    * @class
    * @param buyingPrice {module:client/models/PriceType} 
    * @param regularPrice {module:client/models/MoneyType} 
    * @param fulfillmentChannel {String} The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
    * @param itemCondition {String} The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
    * @param itemSubCondition {String} The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
    * @param sellerSKU {String} The seller stock keeping unit (SKU) of the item.
    */

    constructor(buyingPrice, regularPrice, fulfillmentChannel, itemCondition, itemSubCondition, sellerSKU) {
        
        
        this['BuyingPrice'] = buyingPrice;
        this['RegularPrice'] = regularPrice;
        this['FulfillmentChannel'] = fulfillmentChannel;
        this['ItemCondition'] = itemCondition;
        this['ItemSubCondition'] = itemSubCondition;
        this['SellerSKU'] = sellerSKU;
        
    }

    /**
    * Constructs a <code>OfferType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/OfferType} obj Optional instance to populate.
    * @return {module:client/models/OfferType} The populated <code>OfferType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfferType();
                        
            
            if (data.hasOwnProperty('BuyingPrice')) {
                obj['BuyingPrice'] = PriceType.constructFromObject(data['BuyingPrice']);
            }
            if (data.hasOwnProperty('RegularPrice')) {
                obj['RegularPrice'] = MoneyType.constructFromObject(data['RegularPrice']);
            }
            if (data.hasOwnProperty('FulfillmentChannel')) {
                obj['FulfillmentChannel'] = ApiClient.convertToType(data['FulfillmentChannel'], 'String');
            }
            if (data.hasOwnProperty('ItemCondition')) {
                obj['ItemCondition'] = ApiClient.convertToType(data['ItemCondition'], 'String');
            }
            if (data.hasOwnProperty('ItemSubCondition')) {
                obj['ItemSubCondition'] = ApiClient.convertToType(data['ItemSubCondition'], 'String');
            }
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/PriceType} BuyingPrice
    */
    'BuyingPrice' = undefined;
    /**
    * @member {module:client/models/MoneyType} RegularPrice
    */
    'RegularPrice' = undefined;
    /**
    * The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
    * @member {String} FulfillmentChannel
    */
    'FulfillmentChannel' = undefined;
    /**
    * The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
    * @member {String} ItemCondition
    */
    'ItemCondition' = undefined;
    /**
    * The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
    * @member {String} ItemSubCondition
    */
    'ItemSubCondition' = undefined;
    /**
    * The seller stock keeping unit (SKU) of the item.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;




}
