/**
 * Selling Partner API for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
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
* Enum class InvalidItemReasonCode.
* @enum {}
* @readonly
*/
export default class InvalidItemReasonCode {
        /**
         * value: "InvalidValues"
         * @const
         */
        InvalidValues = "InvalidValues";

        /**
         * value: "DuplicateRequest"
         * @const
         */
        DuplicateRequest = "DuplicateRequest";

        /**
         * value: "NoCompletedShipItems"
         * @const
         */
        NoCompletedShipItems = "NoCompletedShipItems";

        /**
         * value: "NoReturnableQuantity"
         * @const
         */
        NoReturnableQuantity = "NoReturnableQuantity";


    /**
    * Returns a <code>InvalidItemReasonCode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/InvalidItemReasonCode} The enum <code>InvalidItemReasonCode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
