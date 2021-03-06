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
import FulfillmentPreviewItemList from './FulfillmentPreviewItemList';
import Timestamp from './Timestamp';

/**
* The FulfillmentPreviewShipment model module.
* @module client/models/FulfillmentPreviewShipment
* @version v0
*/
export default class FulfillmentPreviewShipment {
    /**
    * Constructs a new <code>FulfillmentPreviewShipment</code>.
    * Delivery and item information for a shipment in a fulfillment order preview.
    * @alias module:client/models/FulfillmentPreviewShipment
    * @class
    * @param earliestShipDate {module:client/models/Timestamp} 
    * @param latestShipDate {module:client/models/Timestamp} 
    * @param earliestArrivalDate {module:client/models/Timestamp} 
    * @param latestArrivalDate {module:client/models/Timestamp} 
    * @param fulfillmentPreviewItems {module:client/models/FulfillmentPreviewItemList} 
    */

    constructor(earliestShipDate, latestShipDate, earliestArrivalDate, latestArrivalDate, fulfillmentPreviewItems) {
        
        
        this['EarliestShipDate'] = earliestShipDate;
        this['LatestShipDate'] = latestShipDate;
        this['EarliestArrivalDate'] = earliestArrivalDate;
        this['LatestArrivalDate'] = latestArrivalDate;
        this['FulfillmentPreviewItems'] = fulfillmentPreviewItems;
        
    }

    /**
    * Constructs a <code>FulfillmentPreviewShipment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FulfillmentPreviewShipment} obj Optional instance to populate.
    * @return {module:client/models/FulfillmentPreviewShipment} The populated <code>FulfillmentPreviewShipment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentPreviewShipment();
                        
            
            if (data.hasOwnProperty('EarliestShipDate')) {
                obj['EarliestShipDate'] = Timestamp.constructFromObject(data['EarliestShipDate']);
            }
            if (data.hasOwnProperty('LatestShipDate')) {
                obj['LatestShipDate'] = Timestamp.constructFromObject(data['LatestShipDate']);
            }
            if (data.hasOwnProperty('EarliestArrivalDate')) {
                obj['EarliestArrivalDate'] = Timestamp.constructFromObject(data['EarliestArrivalDate']);
            }
            if (data.hasOwnProperty('LatestArrivalDate')) {
                obj['LatestArrivalDate'] = Timestamp.constructFromObject(data['LatestArrivalDate']);
            }
            if (data.hasOwnProperty('FulfillmentPreviewItems')) {
                obj['FulfillmentPreviewItems'] = FulfillmentPreviewItemList.constructFromObject(data['FulfillmentPreviewItems']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Timestamp} EarliestShipDate
    */
    'EarliestShipDate' = undefined;
    /**
    * @member {module:client/models/Timestamp} LatestShipDate
    */
    'LatestShipDate' = undefined;
    /**
    * @member {module:client/models/Timestamp} EarliestArrivalDate
    */
    'EarliestArrivalDate' = undefined;
    /**
    * @member {module:client/models/Timestamp} LatestArrivalDate
    */
    'LatestArrivalDate' = undefined;
    /**
    * @member {module:client/models/FulfillmentPreviewItemList} FulfillmentPreviewItems
    */
    'FulfillmentPreviewItems' = undefined;




}
