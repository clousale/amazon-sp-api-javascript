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
* Enum class HazmatType.
* @enum {}
* @readonly
*/
export default class HazmatType {
        /**
         * value: "None"
         * @const
         */
        None = "None";

        /**
         * value: "LQHazmat"
         * @const
         */
        LQHazmat = "LQHazmat";


    /**
    * Returns a <code>HazmatType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/HazmatType} The enum <code>HazmatType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
