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
import CarrierWillPickUpOption from './CarrierWillPickUpOption';
import CurrencyAmount from './CurrencyAmount';

/**
* The AvailableCarrierWillPickUpOption model module.
* @module client/models/AvailableCarrierWillPickUpOption
* @version v0
*/
export default class AvailableCarrierWillPickUpOption {
    /**
    * Constructs a new <code>AvailableCarrierWillPickUpOption</code>.
    * Indicates whether the carrier will pick up the package, and what fee is charged, if any.
    * @alias module:client/models/AvailableCarrierWillPickUpOption
    * @class
    * @param carrierWillPickUpOption {module:client/models/CarrierWillPickUpOption} 
    * @param charge {module:client/models/CurrencyAmount} 
    */

    constructor(carrierWillPickUpOption, charge) {
        
        
        this['CarrierWillPickUpOption'] = carrierWillPickUpOption;
        this['Charge'] = charge;
        
    }

    /**
    * Constructs a <code>AvailableCarrierWillPickUpOption</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AvailableCarrierWillPickUpOption} obj Optional instance to populate.
    * @return {module:client/models/AvailableCarrierWillPickUpOption} The populated <code>AvailableCarrierWillPickUpOption</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableCarrierWillPickUpOption();
                        
            
            if (data.hasOwnProperty('CarrierWillPickUpOption')) {
                obj['CarrierWillPickUpOption'] = CarrierWillPickUpOption.constructFromObject(data['CarrierWillPickUpOption']);
            }
            if (data.hasOwnProperty('Charge')) {
                obj['Charge'] = CurrencyAmount.constructFromObject(data['Charge']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/CarrierWillPickUpOption} CarrierWillPickUpOption
    */
    'CarrierWillPickUpOption' = undefined;
    /**
    * @member {module:client/models/CurrencyAmount} Charge
    */
    'Charge' = undefined;




}
