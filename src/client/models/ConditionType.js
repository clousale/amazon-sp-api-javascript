/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
* Enum class ConditionType.
* @enum {}
* @readonly
*/
export default class ConditionType {
        /**
         * value: "New"
         * @const
         */
        New = "New";

        /**
         * value: "Used"
         * @const
         */
        Used = "Used";

        /**
         * value: "Collectible"
         * @const
         */
        Collectible = "Collectible";

        /**
         * value: "Refurbished"
         * @const
         */
        Refurbished = "Refurbished";

        /**
         * value: "Club"
         * @const
         */
        Club = "Club";


    /**
    * Returns a <code>ConditionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/ConditionType} The enum <code>ConditionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}