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
import ASINInboundGuidanceList from './ASINInboundGuidanceList';
import InvalidASINList from './InvalidASINList';
import InvalidSKUList from './InvalidSKUList';
import SKUInboundGuidanceList from './SKUInboundGuidanceList';

/**
* The GetInboundGuidanceResult model module.
* @module client/models/GetInboundGuidanceResult
* @version v0
*/
export default class GetInboundGuidanceResult {
    /**
    * Constructs a new <code>GetInboundGuidanceResult</code>.
    * @alias module:client/models/GetInboundGuidanceResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetInboundGuidanceResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetInboundGuidanceResult} obj Optional instance to populate.
    * @return {module:client/models/GetInboundGuidanceResult} The populated <code>GetInboundGuidanceResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInboundGuidanceResult();
                        
            
            if (data.hasOwnProperty('SKUInboundGuidanceList')) {
                obj['SKUInboundGuidanceList'] = SKUInboundGuidanceList.constructFromObject(data['SKUInboundGuidanceList']);
            }
            if (data.hasOwnProperty('InvalidSKUList')) {
                obj['InvalidSKUList'] = InvalidSKUList.constructFromObject(data['InvalidSKUList']);
            }
            if (data.hasOwnProperty('ASINInboundGuidanceList')) {
                obj['ASINInboundGuidanceList'] = ASINInboundGuidanceList.constructFromObject(data['ASINInboundGuidanceList']);
            }
            if (data.hasOwnProperty('InvalidASINList')) {
                obj['InvalidASINList'] = InvalidASINList.constructFromObject(data['InvalidASINList']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/SKUInboundGuidanceList} SKUInboundGuidanceList
    */
    'SKUInboundGuidanceList' = undefined;
    /**
    * @member {module:client/models/InvalidSKUList} InvalidSKUList
    */
    'InvalidSKUList' = undefined;
    /**
    * @member {module:client/models/ASINInboundGuidanceList} ASINInboundGuidanceList
    */
    'ASINInboundGuidanceList' = undefined;
    /**
    * @member {module:client/models/InvalidASINList} InvalidASINList
    */
    'InvalidASINList' = undefined;




}