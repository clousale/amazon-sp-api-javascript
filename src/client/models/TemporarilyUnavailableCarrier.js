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

/**
* The TemporarilyUnavailableCarrier model module.
* @module client/models/TemporarilyUnavailableCarrier
* @version v0
*/
export default class TemporarilyUnavailableCarrier {
    /**
    * Constructs a new <code>TemporarilyUnavailableCarrier</code>.
    * A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier.
    * @alias module:client/models/TemporarilyUnavailableCarrier
    * @class
    * @param carrierName {String} The name of the carrier.
    */

    constructor(carrierName) {
        
        
        this['CarrierName'] = carrierName;
        
    }

    /**
    * Constructs a <code>TemporarilyUnavailableCarrier</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/TemporarilyUnavailableCarrier} obj Optional instance to populate.
    * @return {module:client/models/TemporarilyUnavailableCarrier} The populated <code>TemporarilyUnavailableCarrier</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemporarilyUnavailableCarrier();
                        
            
            if (data.hasOwnProperty('CarrierName')) {
                obj['CarrierName'] = ApiClient.convertToType(data['CarrierName'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the carrier.
    * @member {String} CarrierName
    */
    'CarrierName' = undefined;




}