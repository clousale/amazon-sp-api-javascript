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
import ASINPrepInstructionsList from './ASINPrepInstructionsList';
import InvalidASINList from './InvalidASINList';
import InvalidSKUList from './InvalidSKUList';
import SKUPrepInstructionsList from './SKUPrepInstructionsList';

/**
* The GetPrepInstructionsResult model module.
* @module client/models/GetPrepInstructionsResult
* @version v0
*/
export default class GetPrepInstructionsResult {
    /**
    * Constructs a new <code>GetPrepInstructionsResult</code>.
    * @alias module:client/models/GetPrepInstructionsResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetPrepInstructionsResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetPrepInstructionsResult} obj Optional instance to populate.
    * @return {module:client/models/GetPrepInstructionsResult} The populated <code>GetPrepInstructionsResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPrepInstructionsResult();
                        
            
            if (data.hasOwnProperty('SKUPrepInstructionsList')) {
                obj['SKUPrepInstructionsList'] = SKUPrepInstructionsList.constructFromObject(data['SKUPrepInstructionsList']);
            }
            if (data.hasOwnProperty('InvalidSKUList')) {
                obj['InvalidSKUList'] = InvalidSKUList.constructFromObject(data['InvalidSKUList']);
            }
            if (data.hasOwnProperty('ASINPrepInstructionsList')) {
                obj['ASINPrepInstructionsList'] = ASINPrepInstructionsList.constructFromObject(data['ASINPrepInstructionsList']);
            }
            if (data.hasOwnProperty('InvalidASINList')) {
                obj['InvalidASINList'] = InvalidASINList.constructFromObject(data['InvalidASINList']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/SKUPrepInstructionsList} SKUPrepInstructionsList
    */
    'SKUPrepInstructionsList' = undefined;
    /**
    * @member {module:client/models/InvalidSKUList} InvalidSKUList
    */
    'InvalidSKUList' = undefined;
    /**
    * @member {module:client/models/ASINPrepInstructionsList} ASINPrepInstructionsList
    */
    'ASINPrepInstructionsList' = undefined;
    /**
    * @member {module:client/models/InvalidASINList} InvalidASINList
    */
    'InvalidASINList' = undefined;




}
