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
* The RemovalShipmentItem model module.
* @module client/models/RemovalShipmentItem
* @version v0
*/
export default class RemovalShipmentItem {
    /**
    * Constructs a new <code>RemovalShipmentItem</code>.
    * Item-level information for a removal shipment.
    * @alias module:client/models/RemovalShipmentItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RemovalShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RemovalShipmentItem} obj Optional instance to populate.
    * @return {module:client/models/RemovalShipmentItem} The populated <code>RemovalShipmentItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemovalShipmentItem();
                        
            
            if (data.hasOwnProperty('RemovalShipmentItemId')) {
                obj['RemovalShipmentItemId'] = ApiClient.convertToType(data['RemovalShipmentItemId'], 'String');
            }
            if (data.hasOwnProperty('TaxCollectionModel')) {
                obj['TaxCollectionModel'] = ApiClient.convertToType(data['TaxCollectionModel'], 'String');
            }
            if (data.hasOwnProperty('FulfillmentNetworkSKU')) {
                obj['FulfillmentNetworkSKU'] = ApiClient.convertToType(data['FulfillmentNetworkSKU'], 'String');
            }
            if (data.hasOwnProperty('Quantity')) {
                obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
            }
            if (data.hasOwnProperty('Revenue')) {
                obj['Revenue'] = Currency.constructFromObject(data['Revenue']);
            }
            if (data.hasOwnProperty('FeeAmount')) {
                obj['FeeAmount'] = Currency.constructFromObject(data['FeeAmount']);
            }
            if (data.hasOwnProperty('TaxAmount')) {
                obj['TaxAmount'] = Currency.constructFromObject(data['TaxAmount']);
            }
            if (data.hasOwnProperty('TaxWithheld')) {
                obj['TaxWithheld'] = Currency.constructFromObject(data['TaxWithheld']);
            }
        }
        return obj;
    }

    /**
    * An identifier for an item in a removal shipment.
    * @member {String} RemovalShipmentItemId
    */
    'RemovalShipmentItemId' = undefined;
    /**
    * The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
    * @member {String} TaxCollectionModel
    */
    'TaxCollectionModel' = undefined;
    /**
    * The Amazon fulfillment network SKU for the item.
    * @member {String} FulfillmentNetworkSKU
    */
    'FulfillmentNetworkSKU' = undefined;
    /**
    * The quantity of the item.
    * @member {Number} Quantity
    */
    'Quantity' = undefined;
    /**
    * @member {module:client/models/Currency} Revenue
    */
    'Revenue' = undefined;
    /**
    * @member {module:client/models/Currency} FeeAmount
    */
    'FeeAmount' = undefined;
    /**
    * @member {module:client/models/Currency} TaxAmount
    */
    'TaxAmount' = undefined;
    /**
    * @member {module:client/models/Currency} TaxWithheld
    */
    'TaxWithheld' = undefined;




}
