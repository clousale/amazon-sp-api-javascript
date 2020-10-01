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
import AmazonPrepFeesDetailsList from './AmazonPrepFeesDetailsList';
import BarcodeInstruction from './BarcodeInstruction';
import PrepGuidance from './PrepGuidance';
import PrepInstructionList from './PrepInstructionList';

/**
* The SKUPrepInstructions model module.
* @module client/models/SKUPrepInstructions
* @version v0
*/
export default class SKUPrepInstructions {
    /**
    * Constructs a new <code>SKUPrepInstructions</code>.
    * Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon&#x27;s fulfillment network.
    * @alias module:client/models/SKUPrepInstructions
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SKUPrepInstructions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SKUPrepInstructions} obj Optional instance to populate.
    * @return {module:client/models/SKUPrepInstructions} The populated <code>SKUPrepInstructions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SKUPrepInstructions();
                        
            
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('ASIN')) {
                obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
            }
            if (data.hasOwnProperty('BarcodeInstruction')) {
                obj['BarcodeInstruction'] = BarcodeInstruction.constructFromObject(data['BarcodeInstruction']);
            }
            if (data.hasOwnProperty('PrepGuidance')) {
                obj['PrepGuidance'] = PrepGuidance.constructFromObject(data['PrepGuidance']);
            }
            if (data.hasOwnProperty('PrepInstructionList')) {
                obj['PrepInstructionList'] = PrepInstructionList.constructFromObject(data['PrepInstructionList']);
            }
            if (data.hasOwnProperty('AmazonPrepFeesDetailsList')) {
                obj['AmazonPrepFeesDetailsList'] = AmazonPrepFeesDetailsList.constructFromObject(data['AmazonPrepFeesDetailsList']);
            }
        }
        return obj;
    }

    /**
    * The seller SKU of the item.
    * @member {String} SellerSKU
    */
    'SellerSKU' = undefined;
    /**
    * The Amazon Standard Identification Number (ASIN) of the item.
    * @member {String} ASIN
    */
    'ASIN' = undefined;
    /**
    * @member {module:client/models/BarcodeInstruction} BarcodeInstruction
    */
    'BarcodeInstruction' = undefined;
    /**
    * @member {module:client/models/PrepGuidance} PrepGuidance
    */
    'PrepGuidance' = undefined;
    /**
    * @member {module:client/models/PrepInstructionList} PrepInstructionList
    */
    'PrepInstructionList' = undefined;
    /**
    * @member {module:client/models/AmazonPrepFeesDetailsList} AmazonPrepFeesDetailsList
    */
    'AmazonPrepFeesDetailsList' = undefined;




}
