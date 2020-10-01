/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ItemDelivery from './ItemDelivery';
import OrderId from './OrderId';

/**
* The AssociatedItem model module.
* @module client/models/AssociatedItem
* @version v1
*/
export default class AssociatedItem {
    /**
    * Constructs a new <code>AssociatedItem</code>.
    * Information about an item associated with the service job.
    * @alias module:client/models/AssociatedItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AssociatedItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AssociatedItem} obj Optional instance to populate.
    * @return {module:client/models/AssociatedItem} The populated <code>AssociatedItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssociatedItem();
                        
            
            if (data.hasOwnProperty('asin')) {
                obj['asin'] = ApiClient.convertToType(data['asin'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = OrderId.constructFromObject(data['orderId']);
            }
            if (data.hasOwnProperty('itemStatus')) {
                obj['itemStatus'] = ApiClient.convertToType(data['itemStatus'], 'String');
            }
            if (data.hasOwnProperty('brandName')) {
                obj['brandName'] = ApiClient.convertToType(data['brandName'], 'String');
            }
            if (data.hasOwnProperty('itemDelivery')) {
                obj['itemDelivery'] = ItemDelivery.constructFromObject(data['itemDelivery']);
            }
        }
        return obj;
    }

    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} asin
    */
    'asin' = undefined;
    /**
    * The title of the item.
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The total number of items included in the order.
    * @member {Number} quantity
    */
    'quantity' = undefined;
    /**
    * @member {module:client/models/OrderId} orderId
    */
    'orderId' = undefined;
    /**
    * The status of the item.
    * @member {module:client/models/AssociatedItem.ItemStatusEnum} itemStatus
    */
    'itemStatus' = undefined;
    /**
    * The brand name of the item.
    * @member {String} brandName
    */
    'brandName' = undefined;
    /**
    * @member {module:client/models/ItemDelivery} itemDelivery
    */
    'itemDelivery' = undefined;



    /**
    * Allowed values for the <code>itemStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static ItemStatusEnum = {
        /**
         * value: "ACTIVE"
         * @const
         */
        "ACTIVE": "ACTIVE",
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED": "CANCELLED",
        /**
         * value: "SHIPPED"
         * @const
         */
        "SHIPPED": "SHIPPED",
        /**
         * value: "DELIVERED"
         * @const
         */
        "DELIVERED": "DELIVERED"    };

}
