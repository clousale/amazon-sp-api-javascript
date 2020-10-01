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
* Enum class BoxContentsSource.
* @enum {}
* @readonly
*/
export default class BoxContentsSource {
        /**
         * value: "NONE"
         * @const
         */
        NONE = "NONE";

        /**
         * value: "FEED"
         * @const
         */
        FEED = "FEED";

        /**
         * value: "2D_BARCODE"
         * @const
         */
        2D_BARCODE = "2D_BARCODE";

        /**
         * value: "INTERACTIVE"
         * @const
         */
        INTERACTIVE = "INTERACTIVE";


    /**
    * Returns a <code>BoxContentsSource</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:client/models/BoxContentsSource} The enum <code>BoxContentsSource</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
