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
import Address from './Address';
import CODSettings from './CODSettings';
import DeliveryWindow from './DeliveryWindow';
import FulfillmentAction from './FulfillmentAction';
import FulfillmentOrderStatus from './FulfillmentOrderStatus';
import FulfillmentPolicy from './FulfillmentPolicy';
import NotificationEmailList from './NotificationEmailList';
import ShippingSpeedCategory from './ShippingSpeedCategory';
import Timestamp from './Timestamp';

/**
* The FulfillmentOrder model module.
* @module client/models/FulfillmentOrder
* @version v0
*/
export default class FulfillmentOrder {
    /**
    * Constructs a new <code>FulfillmentOrder</code>.
    * General information about a fulfillment order, including its status.
    * @alias module:client/models/FulfillmentOrder
    * @class
    * @param sellerFulfillmentOrderId {String} The fulfillment order identifier submitted with the createFulfillmentOrder operation.
    * @param marketplaceId {String} The identifier for the marketplace the fulfillment order is placed against.
    * @param displayableOrderId {String} A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
    * @param displayableOrderDateTime {module:client/models/Timestamp} 
    * @param displayableOrderComment {String} A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip.
    * @param shippingSpeedCategory {module:client/models/ShippingSpeedCategory} 
    * @param destinationAddress {module:client/models/Address} 
    * @param receivedDateTime {module:client/models/Timestamp} 
    * @param fulfillmentOrderStatus {module:client/models/FulfillmentOrderStatus} 
    * @param statusUpdatedDateTime {module:client/models/Timestamp} 
    */

    constructor(sellerFulfillmentOrderId, marketplaceId, displayableOrderId, displayableOrderDateTime, displayableOrderComment, shippingSpeedCategory, destinationAddress, receivedDateTime, fulfillmentOrderStatus, statusUpdatedDateTime) {
        
        
        this['SellerFulfillmentOrderId'] = sellerFulfillmentOrderId;
        this['MarketplaceId'] = marketplaceId;
        this['DisplayableOrderId'] = displayableOrderId;
        this['DisplayableOrderDateTime'] = displayableOrderDateTime;
        this['DisplayableOrderComment'] = displayableOrderComment;
        this['ShippingSpeedCategory'] = shippingSpeedCategory;
        this['DestinationAddress'] = destinationAddress;
        this['ReceivedDateTime'] = receivedDateTime;
        this['FulfillmentOrderStatus'] = fulfillmentOrderStatus;
        this['StatusUpdatedDateTime'] = statusUpdatedDateTime;
        
    }

    /**
    * Constructs a <code>FulfillmentOrder</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FulfillmentOrder} obj Optional instance to populate.
    * @return {module:client/models/FulfillmentOrder} The populated <code>FulfillmentOrder</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentOrder();
                        
            
            if (data.hasOwnProperty('SellerFulfillmentOrderId')) {
                obj['SellerFulfillmentOrderId'] = ApiClient.convertToType(data['SellerFulfillmentOrderId'], 'String');
            }
            if (data.hasOwnProperty('MarketplaceId')) {
                obj['MarketplaceId'] = ApiClient.convertToType(data['MarketplaceId'], 'String');
            }
            if (data.hasOwnProperty('DisplayableOrderId')) {
                obj['DisplayableOrderId'] = ApiClient.convertToType(data['DisplayableOrderId'], 'String');
            }
            if (data.hasOwnProperty('DisplayableOrderDateTime')) {
                obj['DisplayableOrderDateTime'] = Timestamp.constructFromObject(data['DisplayableOrderDateTime']);
            }
            if (data.hasOwnProperty('DisplayableOrderComment')) {
                obj['DisplayableOrderComment'] = ApiClient.convertToType(data['DisplayableOrderComment'], 'String');
            }
            if (data.hasOwnProperty('ShippingSpeedCategory')) {
                obj['ShippingSpeedCategory'] = ShippingSpeedCategory.constructFromObject(data['ShippingSpeedCategory']);
            }
            if (data.hasOwnProperty('DeliveryWindow')) {
                obj['DeliveryWindow'] = DeliveryWindow.constructFromObject(data['DeliveryWindow']);
            }
            if (data.hasOwnProperty('DestinationAddress')) {
                obj['DestinationAddress'] = Address.constructFromObject(data['DestinationAddress']);
            }
            if (data.hasOwnProperty('FulfillmentAction')) {
                obj['FulfillmentAction'] = FulfillmentAction.constructFromObject(data['FulfillmentAction']);
            }
            if (data.hasOwnProperty('FulfillmentPolicy')) {
                obj['FulfillmentPolicy'] = FulfillmentPolicy.constructFromObject(data['FulfillmentPolicy']);
            }
            if (data.hasOwnProperty('FulfillmentMethod')) {
                obj['FulfillmentMethod'] = ApiClient.convertToType(data['FulfillmentMethod'], 'String');
            }
            if (data.hasOwnProperty('CODSettings')) {
                obj['CODSettings'] = CODSettings.constructFromObject(data['CODSettings']);
            }
            if (data.hasOwnProperty('ReceivedDateTime')) {
                obj['ReceivedDateTime'] = Timestamp.constructFromObject(data['ReceivedDateTime']);
            }
            if (data.hasOwnProperty('FulfillmentOrderStatus')) {
                obj['FulfillmentOrderStatus'] = FulfillmentOrderStatus.constructFromObject(data['FulfillmentOrderStatus']);
            }
            if (data.hasOwnProperty('StatusUpdatedDateTime')) {
                obj['StatusUpdatedDateTime'] = Timestamp.constructFromObject(data['StatusUpdatedDateTime']);
            }
            if (data.hasOwnProperty('NotificationEmailList')) {
                obj['NotificationEmailList'] = NotificationEmailList.constructFromObject(data['NotificationEmailList']);
            }
        }
        return obj;
    }

    /**
    * The fulfillment order identifier submitted with the createFulfillmentOrder operation.
    * @member {String} SellerFulfillmentOrderId
    */
    'SellerFulfillmentOrderId' = undefined;
    /**
    * The identifier for the marketplace the fulfillment order is placed against.
    * @member {String} MarketplaceId
    */
    'MarketplaceId' = undefined;
    /**
    * A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip.
    * @member {String} DisplayableOrderId
    */
    'DisplayableOrderId' = undefined;
    /**
    * @member {module:client/models/Timestamp} DisplayableOrderDateTime
    */
    'DisplayableOrderDateTime' = undefined;
    /**
    * A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip.
    * @member {String} DisplayableOrderComment
    */
    'DisplayableOrderComment' = undefined;
    /**
    * @member {module:client/models/ShippingSpeedCategory} ShippingSpeedCategory
    */
    'ShippingSpeedCategory' = undefined;
    /**
    * @member {module:client/models/DeliveryWindow} DeliveryWindow
    */
    'DeliveryWindow' = undefined;
    /**
    * @member {module:client/models/Address} DestinationAddress
    */
    'DestinationAddress' = undefined;
    /**
    * @member {module:client/models/FulfillmentAction} FulfillmentAction
    */
    'FulfillmentAction' = undefined;
    /**
    * @member {module:client/models/FulfillmentPolicy} FulfillmentPolicy
    */
    'FulfillmentPolicy' = undefined;
    /**
    * Indicates the intended recipient channel for the order.
    * @member {String} FulfillmentMethod
    */
    'FulfillmentMethod' = undefined;
    /**
    * @member {module:client/models/CODSettings} CODSettings
    */
    'CODSettings' = undefined;
    /**
    * @member {module:client/models/Timestamp} ReceivedDateTime
    */
    'ReceivedDateTime' = undefined;
    /**
    * @member {module:client/models/FulfillmentOrderStatus} FulfillmentOrderStatus
    */
    'FulfillmentOrderStatus' = undefined;
    /**
    * @member {module:client/models/Timestamp} StatusUpdatedDateTime
    */
    'StatusUpdatedDateTime' = undefined;
    /**
    * @member {module:client/models/NotificationEmailList} NotificationEmailList
    */
    'NotificationEmailList' = undefined;




}
