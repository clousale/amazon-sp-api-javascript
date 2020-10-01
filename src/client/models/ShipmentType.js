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
/**
* Enum class ShipmentType.
* @enum {}
* @readonly
*/
export default class ShipmentType {
        /**
         * value: "SP"
         * @const
         */
        SP = "SP";

        /**
         * value: "LTL"
         * @const
         */
        LTL = "LTL";


    /**
    * Returns a <code>ShipmentType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/ShipmentType} The enum <code>ShipmentType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}