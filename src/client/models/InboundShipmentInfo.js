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
import Address from './Address';
import BoxContentsFeeDetails from './BoxContentsFeeDetails';
import BoxContentsSource from './BoxContentsSource';
import DateStringType from './DateStringType';
import LabelPrepType from './LabelPrepType';
import ShipmentStatus from './ShipmentStatus';

/**
* The InboundShipmentInfo model module.
* @module client/models/InboundShipmentInfo
* @version v0
*/
export default class InboundShipmentInfo {
    /**
    * Constructs a new <code>InboundShipmentInfo</code>.
    * Information about the seller&#x27;s inbound shipments. Returned by the listInboundShipments operation.
    * @alias module:client/models/InboundShipmentInfo
    * @class
    * @param shipFromAddress {module:client/models/Address} 
    * @param areCasesRequired {Boolean} Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed.
    */

    constructor(shipFromAddress, areCasesRequired) {
        
        
        this['ShipFromAddress'] = shipFromAddress;
        this['AreCasesRequired'] = areCasesRequired;
        
    }

    /**
    * Constructs a <code>InboundShipmentInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InboundShipmentInfo} obj Optional instance to populate.
    * @return {module:client/models/InboundShipmentInfo} The populated <code>InboundShipmentInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundShipmentInfo();
                        
            
            if (data.hasOwnProperty('ShipmentId')) {
                obj['ShipmentId'] = ApiClient.convertToType(data['ShipmentId'], 'String');
            }
            if (data.hasOwnProperty('ShipmentName')) {
                obj['ShipmentName'] = ApiClient.convertToType(data['ShipmentName'], 'String');
            }
            if (data.hasOwnProperty('ShipFromAddress')) {
                obj['ShipFromAddress'] = Address.constructFromObject(data['ShipFromAddress']);
            }
            if (data.hasOwnProperty('DestinationFulfillmentCenterId')) {
                obj['DestinationFulfillmentCenterId'] = ApiClient.convertToType(data['DestinationFulfillmentCenterId'], 'String');
            }
            if (data.hasOwnProperty('ShipmentStatus')) {
                obj['ShipmentStatus'] = ShipmentStatus.constructFromObject(data['ShipmentStatus']);
            }
            if (data.hasOwnProperty('LabelPrepType')) {
                obj['LabelPrepType'] = LabelPrepType.constructFromObject(data['LabelPrepType']);
            }
            if (data.hasOwnProperty('AreCasesRequired')) {
                obj['AreCasesRequired'] = ApiClient.convertToType(data['AreCasesRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('ConfirmedNeedByDate')) {
                obj['ConfirmedNeedByDate'] = DateStringType.constructFromObject(data['ConfirmedNeedByDate']);
            }
            if (data.hasOwnProperty('BoxContentsSource')) {
                obj['BoxContentsSource'] = BoxContentsSource.constructFromObject(data['BoxContentsSource']);
            }
            if (data.hasOwnProperty('EstimatedBoxContentsFee')) {
                obj['EstimatedBoxContentsFee'] = BoxContentsFeeDetails.constructFromObject(data['EstimatedBoxContentsFee']);
            }
        }
        return obj;
    }

    /**
    * The shipment identifier submitted in the request.
    * @member {String} ShipmentId
    */
    'ShipmentId' = undefined;
    /**
    * The name for the inbound shipment.
    * @member {String} ShipmentName
    */
    'ShipmentName' = undefined;
    /**
    * @member {module:client/models/Address} ShipFromAddress
    */
    'ShipFromAddress' = undefined;
    /**
    * An Amazon fulfillment center identifier created by Amazon.
    * @member {String} DestinationFulfillmentCenterId
    */
    'DestinationFulfillmentCenterId' = undefined;
    /**
    * @member {module:client/models/ShipmentStatus} ShipmentStatus
    */
    'ShipmentStatus' = undefined;
    /**
    * @member {module:client/models/LabelPrepType} LabelPrepType
    */
    'LabelPrepType' = undefined;
    /**
    * Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed.
    * @member {Boolean} AreCasesRequired
    */
    'AreCasesRequired' = undefined;
    /**
    * @member {module:client/models/DateStringType} ConfirmedNeedByDate
    */
    'ConfirmedNeedByDate' = undefined;
    /**
    * @member {module:client/models/BoxContentsSource} BoxContentsSource
    */
    'BoxContentsSource' = undefined;
    /**
    * @member {module:client/models/BoxContentsFeeDetails} EstimatedBoxContentsFee
    */
    'EstimatedBoxContentsFee' = undefined;




}
