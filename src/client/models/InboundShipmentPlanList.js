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
import InboundShipmentPlan from './InboundShipmentPlan';

/**
* The InboundShipmentPlanList model module.
* @module client/models/InboundShipmentPlanList
* @version v0
*/
export default class InboundShipmentPlanList extends Array {
    /**
    * Constructs a new <code>InboundShipmentPlanList</code>.
    * A list of inbound shipment plan information
    * @alias module:client/models/InboundShipmentPlanList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>InboundShipmentPlanList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/InboundShipmentPlanList} obj Optional instance to populate.
    * @return {module:client/models/InboundShipmentPlanList} The populated <code>InboundShipmentPlanList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InboundShipmentPlanList();
            ApiClient.constructFromObject(data, obj, 'InboundShipmentPlan');
            
            
        }
        return obj;
    }





}
