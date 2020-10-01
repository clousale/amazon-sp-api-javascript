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
import ShipmentType from './ShipmentType';

/**
* The TransportHeader model module.
* @module client/models/TransportHeader
* @version v0
*/
export default class TransportHeader {
    /**
    * Constructs a new <code>TransportHeader</code>.
    * The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL).
    * @alias module:client/models/TransportHeader
    * @class
    * @param sellerId {String} The Amazon seller identifier.
    * @param shipmentId {String} A shipment identifier originally returned by the createInboundShipmentPlan operation.
    * @param isPartnered {Boolean} Indicates whether a putTransportDetails request is for a partnered carrier.  Possible values:  * true – Request is for an Amazon-partnered carrier.  * false – Request is for a non-Amazon-partnered carrier.
    * @param shipmentType {module:client/models/ShipmentType} 
    */

    constructor(sellerId, shipmentId, isPartnered, shipmentType) {
        
        
        this['SellerId'] = sellerId;
        this['ShipmentId'] = shipmentId;
        this['IsPartnered'] = isPartnered;
        this['ShipmentType'] = shipmentType;
        
    }

    /**
    * Constructs a <code>TransportHeader</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/TransportHeader} obj Optional instance to populate.
    * @return {module:client/models/TransportHeader} The populated <code>TransportHeader</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransportHeader();
                        
            
            if (data.hasOwnProperty('SellerId')) {
                obj['SellerId'] = ApiClient.convertToType(data['SellerId'], 'String');
            }
            if (data.hasOwnProperty('ShipmentId')) {
                obj['ShipmentId'] = ApiClient.convertToType(data['ShipmentId'], 'String');
            }
            if (data.hasOwnProperty('IsPartnered')) {
                obj['IsPartnered'] = ApiClient.convertToType(data['IsPartnered'], 'Boolean');
            }
            if (data.hasOwnProperty('ShipmentType')) {
                obj['ShipmentType'] = ShipmentType.constructFromObject(data['ShipmentType']);
            }
        }
        return obj;
    }

    /**
    * The Amazon seller identifier.
    * @member {String} SellerId
    */
    'SellerId' = undefined;
    /**
    * A shipment identifier originally returned by the createInboundShipmentPlan operation.
    * @member {String} ShipmentId
    */
    'ShipmentId' = undefined;
    /**
    * Indicates whether a putTransportDetails request is for a partnered carrier.  Possible values:  * true – Request is for an Amazon-partnered carrier.  * false – Request is for a non-Amazon-partnered carrier.
    * @member {Boolean} IsPartnered
    */
    'IsPartnered' = undefined;
    /**
    * @member {module:client/models/ShipmentType} ShipmentType
    */
    'ShipmentType' = undefined;




}