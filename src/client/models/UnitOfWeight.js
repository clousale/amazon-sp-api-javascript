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
* Enum class UnitOfWeight.
* @enum {}
* @readonly
*/
export default class UnitOfWeight {
        /**
         * value: "oz"
         * @const
         */
        oz = "oz";

        /**
         * value: "g"
         * @const
         */
        g = "g";


    /**
    * Returns a <code>UnitOfWeight</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/UnitOfWeight} The enum <code>UnitOfWeight</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}