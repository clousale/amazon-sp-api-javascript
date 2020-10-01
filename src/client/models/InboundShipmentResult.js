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

/**
* The InboundShipmentResult model module.
* @module client/models/InboundShipmentResult
* @version v0
*/
export default class InboundShipmentResult {
    /**
    * Constructs a new <code>InboundShipmentResult</code>.
    * @alias module:client/models/InboundShipmentResult
    * @class
    * @param shipmentId {String} The shipment identifier submitted in the request.
    */

    constructor(shipmentId) {
        
        
        this['ShipmentId'] = shipmentId;
        
    }

    /**
    * Constructs a <code>InboundShipmentResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InboundShipmentResult} obj Optional instance to populate.
    * @return {module:client/models/InboundShipmentResult} The populated <code>InboundShipmentResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundShipmentResult();
                        
            
            if (data.hasOwnProperty('ShipmentId')) {
                obj['ShipmentId'] = ApiClient.convertToType(data['ShipmentId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The shipment identifier submitted in the request.
    * @member {String} ShipmentId
    */
    'ShipmentId' = undefined;




}