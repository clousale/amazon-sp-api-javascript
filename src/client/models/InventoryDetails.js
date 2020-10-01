/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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
import ResearchingQuantity from './ResearchingQuantity';
import ReservedQuantity from './ReservedQuantity';
import UnfulfillableQuantity from './UnfulfillableQuantity';

/**
* The InventoryDetails model module.
* @module client/models/InventoryDetails
* @version v1
*/
export default class InventoryDetails {
    /**
    * Constructs a new <code>InventoryDetails</code>.
    * Summarized inventory details. This object will not appear if the details parameter in the request is false.
    * @alias module:client/models/InventoryDetails
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InventoryDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InventoryDetails} obj Optional instance to populate.
    * @return {module:client/models/InventoryDetails} The populated <code>InventoryDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InventoryDetails();
                        
            
            if (data.hasOwnProperty('fulfillableQuantity')) {
                obj['fulfillableQuantity'] = ApiClient.convertToType(data['fulfillableQuantity'], 'Number');
            }
            if (data.hasOwnProperty('inboundWorkingQuantity')) {
                obj['inboundWorkingQuantity'] = ApiClient.convertToType(data['inboundWorkingQuantity'], 'Number');
            }
            if (data.hasOwnProperty('inboundShippedQuantity')) {
                obj['inboundShippedQuantity'] = ApiClient.convertToType(data['inboundShippedQuantity'], 'Number');
            }
            if (data.hasOwnProperty('inboundReceivingQuantity')) {
                obj['inboundReceivingQuantity'] = ApiClient.convertToType(data['inboundReceivingQuantity'], 'Number');
            }
            if (data.hasOwnProperty('reservedQuantity')) {
                obj['reservedQuantity'] = ReservedQuantity.constructFromObject(data['reservedQuantity']);
            }
            if (data.hasOwnProperty('researchingQuantity')) {
                obj['researchingQuantity'] = ResearchingQuantity.constructFromObject(data['researchingQuantity']);
            }
            if (data.hasOwnProperty('unfulfillableQuantity')) {
                obj['unfulfillableQuantity'] = UnfulfillableQuantity.constructFromObject(data['unfulfillableQuantity']);
            }
        }
        return obj;
    }

    /**
    * The item quantity that can be picked, packed, and shipped.
    * @member {Number} fulfillableQuantity
    */
    'fulfillableQuantity' = undefined;
    /**
    * The number of units in an inbound shipment for which you have notified Amazon.
    * @member {Number} inboundWorkingQuantity
    */
    'inboundWorkingQuantity' = undefined;
    /**
    * The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number.
    * @member {Number} inboundShippedQuantity
    */
    'inboundShippedQuantity' = undefined;
    /**
    * The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed.
    * @member {Number} inboundReceivingQuantity
    */
    'inboundReceivingQuantity' = undefined;
    /**
    * @member {module:client/models/ReservedQuantity} reservedQuantity
    */
    'reservedQuantity' = undefined;
    /**
    * @member {module:client/models/ResearchingQuantity} researchingQuantity
    */
    'researchingQuantity' = undefined;
    /**
    * @member {module:client/models/UnfulfillableQuantity} unfulfillableQuantity
    */
    'unfulfillableQuantity' = undefined;




}
