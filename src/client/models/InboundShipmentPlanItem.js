/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import PrepDetailsList from './PrepDetailsList';
import Quantity from './Quantity';

/**
* The InboundShipmentPlanItem model module.
* @module client/models/InboundShipmentPlanItem
* @version v0
*/
export default class InboundShipmentPlanItem {
    /**
    * Constructs a new <code>InboundShipmentPlanItem</code>.
    * Item information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
    * @alias module:client/models/InboundShipmentPlanItem
    * @class
    * @param sellerSKU {String} The seller SKU of the item.
    * @param fulfillmentNetworkSKU {String} Amazon's fulfillment network SKU of the item.
    * @param quantity {module:client/models/Quantity} 
    */

    constructor(sellerSKU, fulfillmentNetworkSKU, quantity) {
        
        
        this['SellerSKU'] = sellerSKU;
        this['FulfillmentNetworkSKU'] = fulfillmentNetworkSKU;
        this['Quantity'] = quantity;
        
    }

    /**
    * Constructs a <code>InboundShipmentPlanItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InboundShipmentPlanItem} obj Optional instance to populate.
    * @return {module:client/models/InboundShipmentPlanItem} The populated <code>InboundShipmentPlanItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundShipmentPlanItem();
                        
            
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('FulfillmentNetworkSKU')) {
                obj['FulfillmentNetworkSKU'] = ApiClient.convertToType(data['FulfillmentNetworkSKU'], 'String');
            }
            if (data.hasOwnProperty('Quantity')) {
                obj['Quantity'] = Quantity.constructFromObject(data['Quantity']);
            }
            if (data.hasOwnProperty('PrepDetailsList')) {
                obj['PrepDetailsList'] = PrepDetailsList.constructFromObject(data['PrepDetailsList']);
            }
        }
        return obj;
    }

    /**
    * The seller SKU of the item.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;
    /**
    * Amazon's fulfillment network SKU of the item.
    * @member {String} FulfillmentNetworkSKU
    */
    'FulfillmentNetworkSKU' = undefined;
    /**
    * @member {module:client/models/Quantity} Quantity
    */
    'Quantity' = undefined;
    /**
    * @member {module:client/models/PrepDetailsList} PrepDetailsList
    */
    'PrepDetailsList' = undefined;




}