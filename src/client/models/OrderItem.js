/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import Money from './Money';
import PointsGrantedDetail from './PointsGrantedDetail';
import ProductInfoDetail from './ProductInfoDetail';
import PromotionIdList from './PromotionIdList';
import TaxCollection from './TaxCollection';

/**
* The OrderItem model module.
* @module client/models/OrderItem
* @version v0
*/
export default class OrderItem {
    /**
    * Constructs a new <code>OrderItem</code>.
    * A single order item.
    * @alias module:client/models/OrderItem
    * @class
    * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
    * @param orderItemId {String} An Amazon-defined order item identifier.
    * @param quantityOrdered {Number} The number of items in the order. 
    */

    constructor(ASIN, orderItemId, quantityOrdered) {
        
        
        this['ASIN'] = ASIN;
        this['OrderItemId'] = orderItemId;
        this['QuantityOrdered'] = quantityOrdered;
        
    }

    /**
    * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/OrderItem} obj Optional instance to populate.
    * @return {module:client/models/OrderItem} The populated <code>OrderItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItem();
                        
            
            if (data.hasOwnProperty('ASIN')) {
                obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
            }
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('OrderItemId')) {
                obj['OrderItemId'] = ApiClient.convertToType(data['OrderItemId'], 'String');
            }
            if (data.hasOwnProperty('Title')) {
                obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
            }
            if (data.hasOwnProperty('QuantityOrdered')) {
                obj['QuantityOrdered'] = ApiClient.convertToType(data['QuantityOrdered'], 'Number');
            }
            if (data.hasOwnProperty('QuantityShipped')) {
                obj['QuantityShipped'] = ApiClient.convertToType(data['QuantityShipped'], 'Number');
            }
            if (data.hasOwnProperty('ProductInfo')) {
                obj['ProductInfo'] = ProductInfoDetail.constructFromObject(data['ProductInfo']);
            }
            if (data.hasOwnProperty('PointsGranted')) {
                obj['PointsGranted'] = PointsGrantedDetail.constructFromObject(data['PointsGranted']);
            }
            if (data.hasOwnProperty('ItemPrice')) {
                obj['ItemPrice'] = Money.constructFromObject(data['ItemPrice']);
            }
            if (data.hasOwnProperty('ShippingPrice')) {
                obj['ShippingPrice'] = Money.constructFromObject(data['ShippingPrice']);
            }
            if (data.hasOwnProperty('ItemTax')) {
                obj['ItemTax'] = Money.constructFromObject(data['ItemTax']);
            }
            if (data.hasOwnProperty('ShippingTax')) {
                obj['ShippingTax'] = Money.constructFromObject(data['ShippingTax']);
            }
            if (data.hasOwnProperty('ShippingDiscount')) {
                obj['ShippingDiscount'] = Money.constructFromObject(data['ShippingDiscount']);
            }
            if (data.hasOwnProperty('ShippingDiscountTax')) {
                obj['ShippingDiscountTax'] = Money.constructFromObject(data['ShippingDiscountTax']);
            }
            if (data.hasOwnProperty('PromotionDiscount')) {
                obj['PromotionDiscount'] = Money.constructFromObject(data['PromotionDiscount']);
            }
            if (data.hasOwnProperty('PromotionDiscountTax')) {
                obj['PromotionDiscountTax'] = Money.constructFromObject(data['PromotionDiscountTax']);
            }
            if (data.hasOwnProperty('PromotionIds')) {
                obj['PromotionIds'] = PromotionIdList.constructFromObject(data['PromotionIds']);
            }
            if (data.hasOwnProperty('CODFee')) {
                obj['CODFee'] = Money.constructFromObject(data['CODFee']);
            }
            if (data.hasOwnProperty('CODFeeDiscount')) {
                obj['CODFeeDiscount'] = Money.constructFromObject(data['CODFeeDiscount']);
            }
            if (data.hasOwnProperty('IsGift')) {
                obj['IsGift'] = ApiClient.convertToType(data['IsGift'], 'Boolean');
            }
            if (data.hasOwnProperty('ConditionNote')) {
                obj['ConditionNote'] = ApiClient.convertToType(data['ConditionNote'], 'String');
            }
            if (data.hasOwnProperty('ConditionId')) {
                obj['ConditionId'] = ApiClient.convertToType(data['ConditionId'], 'String');
            }
            if (data.hasOwnProperty('ConditionSubtypeId')) {
                obj['ConditionSubtypeId'] = ApiClient.convertToType(data['ConditionSubtypeId'], 'String');
            }
            if (data.hasOwnProperty('ScheduledDeliveryStartDate')) {
                obj['ScheduledDeliveryStartDate'] = ApiClient.convertToType(data['ScheduledDeliveryStartDate'], 'String');
            }
            if (data.hasOwnProperty('ScheduledDeliveryEndDate')) {
                obj['ScheduledDeliveryEndDate'] = ApiClient.convertToType(data['ScheduledDeliveryEndDate'], 'String');
            }
            if (data.hasOwnProperty('PriceDesignation')) {
                obj['PriceDesignation'] = ApiClient.convertToType(data['PriceDesignation'], 'String');
            }
            if (data.hasOwnProperty('TaxCollection')) {
                obj['TaxCollection'] = TaxCollection.constructFromObject(data['TaxCollection']);
            }
            if (data.hasOwnProperty('SerialNumberRequired')) {
                obj['SerialNumberRequired'] = ApiClient.convertToType(data['SerialNumberRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('IsTransparency')) {
                obj['IsTransparency'] = ApiClient.convertToType(data['IsTransparency'], 'Boolean');
            }
            if (data.hasOwnProperty('IossNumber')) {
                obj['IossNumber'] = ApiClient.convertToType(data['IossNumber'], 'String');
            }
            if (data.hasOwnProperty('DeemedResellerCategory')) {
                obj['DeemedResellerCategory'] = ApiClient.convertToType(data['DeemedResellerCategory'], 'String');
            }
        }
        return obj;
    }

    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} ASIN
    */
    'ASIN' = undefined;
    /**
    * The seller stock keeping unit (SKU) of the item.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;
    /**
    * An Amazon-defined order item identifier.
    * @member {String} OrderItemId
    */
    'OrderItemId' = undefined;
    /**
    * The name of the item.
    * @member {String} Title
    */
    'Title' = undefined;
    /**
    * The number of items in the order. 
    * @member {Number} QuantityOrdered
    */
    'QuantityOrdered' = undefined;
    /**
    * The number of items shipped.
    * @member {Number} QuantityShipped
    */
    'QuantityShipped' = undefined;
    /**
    * @member {module:client/models/ProductInfoDetail} ProductInfo
    */
    'ProductInfo' = undefined;
    /**
    * @member {module:client/models/PointsGrantedDetail} PointsGranted
    */
    'PointsGranted' = undefined;
    /**
    * @member {module:client/models/Money} ItemPrice
    */
    'ItemPrice' = undefined;
    /**
    * @member {module:client/models/Money} ShippingPrice
    */
    'ShippingPrice' = undefined;
    /**
    * @member {module:client/models/Money} ItemTax
    */
    'ItemTax' = undefined;
    /**
    * @member {module:client/models/Money} ShippingTax
    */
    'ShippingTax' = undefined;
    /**
    * @member {module:client/models/Money} ShippingDiscount
    */
    'ShippingDiscount' = undefined;
    /**
    * @member {module:client/models/Money} ShippingDiscountTax
    */
    'ShippingDiscountTax' = undefined;
    /**
    * @member {module:client/models/Money} PromotionDiscount
    */
    'PromotionDiscount' = undefined;
    /**
    * @member {module:client/models/Money} PromotionDiscountTax
    */
    'PromotionDiscountTax' = undefined;
    /**
    * @member {module:client/models/PromotionIdList} PromotionIds
    */
    'PromotionIds' = undefined;
    /**
    * @member {module:client/models/Money} CODFee
    */
    'CODFee' = undefined;
    /**
    * @member {module:client/models/Money} CODFeeDiscount
    */
    'CODFeeDiscount' = undefined;
    /**
    * When true, the item is a gift.
    * @member {Boolean} IsGift
    */
    'IsGift' = undefined;
    /**
    * The condition of the item as described by the seller.
    * @member {String} ConditionNote
    */
    'ConditionNote' = undefined;
    /**
    * The condition of the item.  Possible values: New, Used, Collectible, Refurbished, Preorder, Club.
    * @member {String} ConditionId
    */
    'ConditionId' = undefined;
    /**
    * The subcondition of the item.  Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, Any, Other.
    * @member {String} ConditionSubtypeId
    */
    'ConditionSubtypeId' = undefined;
    /**
    * The start date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
    * @member {String} ScheduledDeliveryStartDate
    */
    'ScheduledDeliveryStartDate' = undefined;
    /**
    * The end date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format.
    * @member {String} ScheduledDeliveryEndDate
    */
    'ScheduledDeliveryEndDate' = undefined;
    /**
    * Indicates that the selling price is a special price that is available only for Amazon Business orders. For more information about the Amazon Business Seller Program, see the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).   Possible values: BusinessPrice - A special price that is available only for Amazon Business orders.
    * @member {String} PriceDesignation
    */
    'PriceDesignation' = undefined;
    /**
    * @member {module:client/models/TaxCollection} TaxCollection
    */
    'TaxCollection' = undefined;
    /**
    * When true, the product type for this item has a serial number.  Returned only for Amazon Easy Ship orders.
    * @member {Boolean} SerialNumberRequired
    */
    'SerialNumberRequired' = undefined;
    /**
    * When true, transparency codes are required.
    * @member {Boolean} IsTransparency
    */
    'IsTransparency' = undefined;
    /**
    * The IOSS number of the seller. Sellers selling in the EU will be assigned a unique IOSS number that must be listed on all packages sent to the EU.
    * @member {String} IossNumber
    */
    'IossNumber' = undefined;
    /**
    * The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK.
    * @member {module:client/models/OrderItem.DeemedResellerCategoryEnum} DeemedResellerCategory
    */
    'DeemedResellerCategory' = undefined;



    /**
    * Allowed values for the <code>DeemedResellerCategory</code> property.
    * @enum {String}
    * @readonly
    */
    static DeemedResellerCategoryEnum = {
        /**
         * value: "IOSS"
         * @const
         */
        "IOSS": "IOSS",
        /**
         * value: "UOSS"
         * @const
         */
        "UOSS": "UOSS"    };

}
