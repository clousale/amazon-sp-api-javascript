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
* Enum class SellerFreightClass.
* @enum {}
* @readonly
*/
export default class SellerFreightClass {
        /**
         * value: "50"
         * @const
         */
        50 = "50";

        /**
         * value: "55"
         * @const
         */
        55 = "55";

        /**
         * value: "60"
         * @const
         */
        60 = "60";

        /**
         * value: "65"
         * @const
         */
        65 = "65";

        /**
         * value: "70"
         * @const
         */
        70 = "70";

        /**
         * value: "77.5"
         * @const
         */
        77.5 = "77.5";

        /**
         * value: "85"
         * @const
         */
        85 = "85";

        /**
         * value: "92.5"
         * @const
         */
        92.5 = "92.5";

        /**
         * value: "100"
         * @const
         */
        100 = "100";

        /**
         * value: "110"
         * @const
         */
        110 = "110";

        /**
         * value: "125"
         * @const
         */
        125 = "125";

        /**
         * value: "150"
         * @const
         */
        150 = "150";

        /**
         * value: "175"
         * @const
         */
        175 = "175";

        /**
         * value: "200"
         * @const
         */
        200 = "200";

        /**
         * value: "250"
         * @const
         */
        250 = "250";

        /**
         * value: "300"
         * @const
         */
        300 = "300";

        /**
         * value: "400"
         * @const
         */
        400 = "400";

        /**
         * value: "500"
         * @const
         */
        500 = "500";


    /**
    * Returns a <code>SellerFreightClass</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/SellerFreightClass} The enum <code>SellerFreightClass</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}