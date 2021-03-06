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
import TransportDetailInput from './TransportDetailInput';

/**
* The PutTransportDetailsRequest model module.
* @module client/models/PutTransportDetailsRequest
* @version v0
*/
export default class PutTransportDetailsRequest {
    /**
    * Constructs a new <code>PutTransportDetailsRequest</code>.
    * The request schema for a putTransportDetails operation.
    * @alias module:client/models/PutTransportDetailsRequest
    * @class
    * @param isPartnered {Boolean} Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.
    * @param shipmentType {module:client/models/ShipmentType} 
    * @param transportDetails {module:client/models/TransportDetailInput} 
    */

    constructor(isPartnered, shipmentType, transportDetails) {
        
        
        this['IsPartnered'] = isPartnered;
        this['ShipmentType'] = shipmentType;
        this['TransportDetails'] = transportDetails;
        
    }

    /**
    * Constructs a <code>PutTransportDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PutTransportDetailsRequest} obj Optional instance to populate.
    * @return {module:client/models/PutTransportDetailsRequest} The populated <code>PutTransportDetailsRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTransportDetailsRequest();
                        
            
            if (data.hasOwnProperty('IsPartnered')) {
                obj['IsPartnered'] = ApiClient.convertToType(data['IsPartnered'], 'Boolean');
            }
            if (data.hasOwnProperty('ShipmentType')) {
                obj['ShipmentType'] = ShipmentType.constructFromObject(data['ShipmentType']);
            }
            if (data.hasOwnProperty('TransportDetails')) {
                obj['TransportDetails'] = TransportDetailInput.constructFromObject(data['TransportDetails']);
            }
        }
        return obj;
    }

    /**
    * Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.
    * @member {Boolean} IsPartnered
    */
    'IsPartnered' = undefined;
    /**
    * @member {module:client/models/ShipmentType} ShipmentType
    */
    'ShipmentType' = undefined;
    /**
    * @member {module:client/models/TransportDetailInput} TransportDetails
    */
    'TransportDetails' = undefined;




}
