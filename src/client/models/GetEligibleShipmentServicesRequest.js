/**
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
import ShipmentRequestDetails from './ShipmentRequestDetails';
import ShippingOfferingFilter from './ShippingOfferingFilter';

/**
* The GetEligibleShipmentServicesRequest model module.
* @module client/models/GetEligibleShipmentServicesRequest
* @version v0
*/
export default class GetEligibleShipmentServicesRequest {
    /**
    * Constructs a new <code>GetEligibleShipmentServicesRequest</code>.
    * Request schema.
    * @alias module:client/models/GetEligibleShipmentServicesRequest
    * @class
    * @param shipmentRequestDetails {module:client/models/ShipmentRequestDetails} 
    */

    constructor(shipmentRequestDetails) {
        
        
        this['ShipmentRequestDetails'] = shipmentRequestDetails;
        
    }

    /**
    * Constructs a <code>GetEligibleShipmentServicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetEligibleShipmentServicesRequest} obj Optional instance to populate.
    * @return {module:client/models/GetEligibleShipmentServicesRequest} The populated <code>GetEligibleShipmentServicesRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEligibleShipmentServicesRequest();
                        
            
            if (data.hasOwnProperty('ShipmentRequestDetails')) {
                obj['ShipmentRequestDetails'] = ShipmentRequestDetails.constructFromObject(data['ShipmentRequestDetails']);
            }
            if (data.hasOwnProperty('ShippingOfferingFilter')) {
                obj['ShippingOfferingFilter'] = ShippingOfferingFilter.constructFromObject(data['ShippingOfferingFilter']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ShipmentRequestDetails} ShipmentRequestDetails
    */
    'ShipmentRequestDetails' = undefined;
    /**
    * @member {module:client/models/ShippingOfferingFilter} ShippingOfferingFilter
    */
    'ShippingOfferingFilter' = undefined;




}
