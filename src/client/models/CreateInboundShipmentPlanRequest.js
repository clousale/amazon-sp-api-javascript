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
import InboundShipmentPlanRequestItemList from './InboundShipmentPlanRequestItemList';
import LabelPrepPreference from './LabelPrepPreference';

/**
* The CreateInboundShipmentPlanRequest model module.
* @module client/models/CreateInboundShipmentPlanRequest
* @version v0
*/
export default class CreateInboundShipmentPlanRequest {
    /**
    * Constructs a new <code>CreateInboundShipmentPlanRequest</code>.
    * The request schema for the createInboundShipmentPlan operation.
    * @alias module:client/models/CreateInboundShipmentPlanRequest
    * @class
    * @param shipFromAddress {module:client/models/Address} 
    * @param labelPrepPreference {module:client/models/LabelPrepPreference} 
    * @param inboundShipmentPlanRequestItems {module:client/models/InboundShipmentPlanRequestItemList} 
    */

    constructor(shipFromAddress, labelPrepPreference, inboundShipmentPlanRequestItems) {
        
        
        this['ShipFromAddress'] = shipFromAddress;
        this['LabelPrepPreference'] = labelPrepPreference;
        this['InboundShipmentPlanRequestItems'] = inboundShipmentPlanRequestItems;
        
    }

    /**
    * Constructs a <code>CreateInboundShipmentPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateInboundShipmentPlanRequest} obj Optional instance to populate.
    * @return {module:client/models/CreateInboundShipmentPlanRequest} The populated <code>CreateInboundShipmentPlanRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInboundShipmentPlanRequest();
                        
            
            if (data.hasOwnProperty('ShipFromAddress')) {
                obj['ShipFromAddress'] = Address.constructFromObject(data['ShipFromAddress']);
            }
            if (data.hasOwnProperty('LabelPrepPreference')) {
                obj['LabelPrepPreference'] = LabelPrepPreference.constructFromObject(data['LabelPrepPreference']);
            }
            if (data.hasOwnProperty('ShipToCountryCode')) {
                obj['ShipToCountryCode'] = ApiClient.convertToType(data['ShipToCountryCode'], 'String');
            }
            if (data.hasOwnProperty('ShipToCountrySubdivisionCode')) {
                obj['ShipToCountrySubdivisionCode'] = ApiClient.convertToType(data['ShipToCountrySubdivisionCode'], 'String');
            }
            if (data.hasOwnProperty('InboundShipmentPlanRequestItems')) {
                obj['InboundShipmentPlanRequestItems'] = InboundShipmentPlanRequestItemList.constructFromObject(data['InboundShipmentPlanRequestItems']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Address} ShipFromAddress
    */
    'ShipFromAddress' = undefined;
    /**
    * @member {module:client/models/LabelPrepPreference} LabelPrepPreference
    */
    'LabelPrepPreference' = undefined;
    /**
    * The two-character country code for the country where the inbound shipment is to be sent.  Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.   Values:   ShipToCountryCode values for North America:  * CA – Canada  * MX - Mexico  * US - United States  ShipToCountryCode values for MCI sellers in Europe:  * DE – Germany  * ES – Spain  * FR – France  * GB – United Kingdom  * IT – Italy  Default: The country code for the seller's home marketplace.
    * @member {String} ShipToCountryCode
    */
    'ShipToCountryCode' = undefined;
    /**
    * The two-character country code, followed by a dash and then up to three characters that represent the subdivision of the country where the inbound shipment is to be sent. For example, \"IN-MH\". In full ISO 3166-2 format.  Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.
    * @member {String} ShipToCountrySubdivisionCode
    */
    'ShipToCountrySubdivisionCode' = undefined;
    /**
    * @member {module:client/models/InboundShipmentPlanRequestItemList} InboundShipmentPlanRequestItems
    */
    'InboundShipmentPlanRequestItems' = undefined;




}