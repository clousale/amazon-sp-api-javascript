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
* Enum class ShipmentStatus.
* @enum {}
* @readonly
*/
export default class ShipmentStatus {
        /**
         * value: "Purchased"
         * @const
         */
        Purchased = "Purchased";

        /**
         * value: "RefundPending"
         * @const
         */
        RefundPending = "RefundPending";

        /**
         * value: "RefundRejected"
         * @const
         */
        RefundRejected = "RefundRejected";

        /**
         * value: "RefundApplied"
         * @const
         */
        RefundApplied = "RefundApplied";


    /**
    * Returns a <code>ShipmentStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/ShipmentStatus} The enum <code>ShipmentStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
