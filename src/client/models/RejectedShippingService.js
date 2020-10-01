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
import ShippingServiceIdentifier from './ShippingServiceIdentifier';

/**
* The RejectedShippingService model module.
* @module client/models/RejectedShippingService
* @version v0
*/
export default class RejectedShippingService {
    /**
    * Constructs a new <code>RejectedShippingService</code>.
    * Information about a rejected shipping service
    * @alias module:client/models/RejectedShippingService
    * @class
    * @param carrierName {String} The rejected shipping carrier name. e.g. USPS
    * @param shippingServiceName {String} The rejected shipping service localized name. e.g. FedEx Standard Overnight
    * @param shippingServiceId {module:client/models/ShippingServiceIdentifier} 
    * @param rejectionReasonCode {String} A reason code meant to be consumed programatically. e.g. CARRIER_CANNOT_SHIP_TO_POBOX
    */

    constructor(carrierName, shippingServiceName, shippingServiceId, rejectionReasonCode) {
        
        
        this['CarrierName'] = carrierName;
        this['ShippingServiceName'] = shippingServiceName;
        this['ShippingServiceId'] = shippingServiceId;
        this['RejectionReasonCode'] = rejectionReasonCode;
        
    }

    /**
    * Constructs a <code>RejectedShippingService</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RejectedShippingService} obj Optional instance to populate.
    * @return {module:client/models/RejectedShippingService} The populated <code>RejectedShippingService</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RejectedShippingService();
                        
            
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
            if (data.hasOwnProperty('ShippingServiceName')) {
                obj['ShippingServiceName'] = ApiClient.convertToType(data['ShippingServiceName'], 'String');
            }
            if (data.hasOwnProperty('ShippingServiceId')) {
                obj['ShippingServiceId'] = ShippingServiceIdentifier.constructFromObject(data['ShippingServiceId']);
            }
            if (data.hasOwnProperty('RejectionReasonCode')) {
                obj['RejectionReasonCode'] = ApiClient.convertToType(data['RejectionReasonCode'], 'String');
            }
            if (data.hasOwnProperty('RejectionReasonMessage')) {
                obj['RejectionReasonMessage'] = ApiClient.convertToType(data['RejectionReasonMessage'], 'String');
            }
        }
        return obj;
    }

    /**
    * The rejected shipping carrier name. e.g. USPS
    * @member {String} CarrierName
    */
    'CarrierName' = undefined;
    /**
    * The rejected shipping service localized name. e.g. FedEx Standard Overnight
    * @member {String} ShippingServiceName
    */
    'ShippingServiceName' = undefined;
    /**
    * @member {module:client/models/ShippingServiceIdentifier} ShippingServiceId
    */
    'ShippingServiceId' = undefined;
    /**
    * A reason code meant to be consumed programatically. e.g. CARRIER_CANNOT_SHIP_TO_POBOX
    * @member {String} RejectionReasonCode
    */
    'RejectionReasonCode' = undefined;
    /**
    * A localized human readable description of the rejected reason.
    * @member {String} RejectionReasonMessage
    */
    'RejectionReasonMessage' = undefined;




}
