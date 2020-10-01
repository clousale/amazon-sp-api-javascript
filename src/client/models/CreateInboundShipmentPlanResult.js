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
import InboundShipmentPlanList from './InboundShipmentPlanList';

/**
* The CreateInboundShipmentPlanResult model module.
* @module client/models/CreateInboundShipmentPlanResult
* @version v0
*/
export default class CreateInboundShipmentPlanResult {
    /**
    * Constructs a new <code>CreateInboundShipmentPlanResult</code>.
    * @alias module:client/models/CreateInboundShipmentPlanResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateInboundShipmentPlanResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CreateInboundShipmentPlanResult} obj Optional instance to populate.
    * @return {module:client/models/CreateInboundShipmentPlanResult} The populated <code>CreateInboundShipmentPlanResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateInboundShipmentPlanResult();
                        
            
            if (data.hasOwnProperty('InboundShipmentPlans')) {
                obj['InboundShipmentPlans'] = InboundShipmentPlanList.constructFromObject(data['InboundShipmentPlans']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/InboundShipmentPlanList} InboundShipmentPlans
    */
    'InboundShipmentPlans' = undefined;




}
