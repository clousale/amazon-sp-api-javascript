/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
import FeeList from './FeeList';
import FulfillmentPreviewShipmentList from './FulfillmentPreviewShipmentList';
import ScheduledDeliveryInfo from './ScheduledDeliveryInfo';
import ShippingSpeedCategory from './ShippingSpeedCategory';
import StringList from './StringList';
import UnfulfillablePreviewItemList from './UnfulfillablePreviewItemList';
import Weight from './Weight';

/**
* The FulfillmentPreview model module.
* @module client/models/FulfillmentPreview
* @version v0
*/
export default class FulfillmentPreview {
    /**
    * Constructs a new <code>FulfillmentPreview</code>.
    * Information about a fulfillment order preview, including delivery and fee information based on shipping method.
    * @alias module:client/models/FulfillmentPreview
    * @class
    * @param shippingSpeedCategory {module:client/models/ShippingSpeedCategory} 
    * @param isFulfillable {Boolean} When true, this fulfillment order preview is fulfillable.
    * @param isCODCapable {Boolean} When true, this fulfillment order preview is for COD (Cash On Delivery).
    * @param marketplaceId {String} The marketplace the fulfillment order is placed against.
    */

    constructor(shippingSpeedCategory, isFulfillable, isCODCapable, marketplaceId) {
        
        
        this['ShippingSpeedCategory'] = shippingSpeedCategory;
        this['IsFulfillable'] = isFulfillable;
        this['IsCODCapable'] = isCODCapable;
        this['MarketplaceId'] = marketplaceId;
        
    }

    /**
    * Constructs a <code>FulfillmentPreview</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FulfillmentPreview} obj Optional instance to populate.
    * @return {module:client/models/FulfillmentPreview} The populated <code>FulfillmentPreview</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentPreview();
                        
            
            if (data.hasOwnProperty('ShippingSpeedCategory')) {
                obj['ShippingSpeedCategory'] = ShippingSpeedCategory.constructFromObject(data['ShippingSpeedCategory']);
            }
            if (data.hasOwnProperty('ScheduledDeliveryInfo')) {
                obj['ScheduledDeliveryInfo'] = ScheduledDeliveryInfo.constructFromObject(data['ScheduledDeliveryInfo']);
            }
            if (data.hasOwnProperty('IsFulfillable')) {
                obj['IsFulfillable'] = ApiClient.convertToType(data['IsFulfillable'], 'Boolean');
            }
            if (data.hasOwnProperty('IsCODCapable')) {
                obj['IsCODCapable'] = ApiClient.convertToType(data['IsCODCapable'], 'Boolean');
            }
            if (data.hasOwnProperty('EstimatedShippingWeight')) {
                obj['EstimatedShippingWeight'] = Weight.constructFromObject(data['EstimatedShippingWeight']);
            }
            if (data.hasOwnProperty('EstimatedFees')) {
                obj['EstimatedFees'] = FeeList.constructFromObject(data['EstimatedFees']);
            }
            if (data.hasOwnProperty('FulfillmentPreviewShipments')) {
                obj['FulfillmentPreviewShipments'] = FulfillmentPreviewShipmentList.constructFromObject(data['FulfillmentPreviewShipments']);
            }
            if (data.hasOwnProperty('UnfulfillablePreviewItems')) {
                obj['UnfulfillablePreviewItems'] = UnfulfillablePreviewItemList.constructFromObject(data['UnfulfillablePreviewItems']);
            }
            if (data.hasOwnProperty('OrderUnfulfillableReasons')) {
                obj['OrderUnfulfillableReasons'] = StringList.constructFromObject(data['OrderUnfulfillableReasons']);
            }
            if (data.hasOwnProperty('MarketplaceId')) {
                obj['MarketplaceId'] = ApiClient.convertToType(data['MarketplaceId'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ShippingSpeedCategory} ShippingSpeedCategory
    */
    'ShippingSpeedCategory' = undefined;
    /**
    * @member {module:client/models/ScheduledDeliveryInfo} ScheduledDeliveryInfo
    */
    'ScheduledDeliveryInfo' = undefined;
    /**
    * When true, this fulfillment order preview is fulfillable.
    * @member {Boolean} IsFulfillable
    */
    'IsFulfillable' = undefined;
    /**
    * When true, this fulfillment order preview is for COD (Cash On Delivery).
    * @member {Boolean} IsCODCapable
    */
    'IsCODCapable' = undefined;
    /**
    * @member {module:client/models/Weight} EstimatedShippingWeight
    */
    'EstimatedShippingWeight' = undefined;
    /**
    * @member {module:client/models/FeeList} EstimatedFees
    */
    'EstimatedFees' = undefined;
    /**
    * @member {module:client/models/FulfillmentPreviewShipmentList} FulfillmentPreviewShipments
    */
    'FulfillmentPreviewShipments' = undefined;
    /**
    * @member {module:client/models/UnfulfillablePreviewItemList} UnfulfillablePreviewItems
    */
    'UnfulfillablePreviewItems' = undefined;
    /**
    * @member {module:client/models/StringList} OrderUnfulfillableReasons
    */
    'OrderUnfulfillableReasons' = undefined;
    /**
    * The marketplace the fulfillment order is placed against.
    * @member {String} MarketplaceId
    */
    'MarketplaceId' = undefined;




}
