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
import FulfillmentShipmentPackage from './FulfillmentShipmentPackage';

/**
* The FulfillmentShipmentPackageList model module.
* @module client/models/FulfillmentShipmentPackageList
* @version v0
*/
export default class FulfillmentShipmentPackageList extends Array {
    /**
    * Constructs a new <code>FulfillmentShipmentPackageList</code>.
    * A list of fulfillment shipment package information.
    * @alias module:client/models/FulfillmentShipmentPackageList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>FulfillmentShipmentPackageList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FulfillmentShipmentPackageList} obj Optional instance to populate.
    * @return {module:client/models/FulfillmentShipmentPackageList} The populated <code>FulfillmentShipmentPackageList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentShipmentPackageList();
            ApiClient.constructFromObject(data, obj, 'FulfillmentShipmentPackage');
            
            
        }
        return obj;
    }





}
