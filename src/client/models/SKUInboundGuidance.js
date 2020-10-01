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
import GuidanceReasonList from './GuidanceReasonList';
import InboundGuidance from './InboundGuidance';

/**
* The SKUInboundGuidance model module.
* @module client/models/SKUInboundGuidance
* @version v0
*/
export default class SKUInboundGuidance {
    /**
    * Constructs a new <code>SKUInboundGuidance</code>.
    * Reasons why a given seller SKU is not recommended for shipment to Amazon&#x27;s fulfillment network.
    * @alias module:client/models/SKUInboundGuidance
    * @class
    * @param sellerSKU {String} The seller SKU of the item.
    * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
    * @param inboundGuidance {module:client/models/InboundGuidance} 
    */

    constructor(sellerSKU, ASIN, inboundGuidance) {
        
        
        this['SellerSKU'] = sellerSKU;
        this['ASIN'] = ASIN;
        this['InboundGuidance'] = inboundGuidance;
        
    }

    /**
    * Constructs a <code>SKUInboundGuidance</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SKUInboundGuidance} obj Optional instance to populate.
    * @return {module:client/models/SKUInboundGuidance} The populated <code>SKUInboundGuidance</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SKUInboundGuidance();
                        
            
            if (data.hasOwnProperty('SellerSKU')) {
                obj['SellerSKU'] = ApiClient.convertToType(data['SellerSKU'], 'String');
            }
            if (data.hasOwnProperty('ASIN')) {
                obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
            }
            if (data.hasOwnProperty('InboundGuidance')) {
                obj['InboundGuidance'] = InboundGuidance.constructFromObject(data['InboundGuidance']);
            }
            if (data.hasOwnProperty('GuidanceReasonList')) {
                obj['GuidanceReasonList'] = GuidanceReasonList.constructFromObject(data['GuidanceReasonList']);
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
    * @member {module:client/models/InboundGuidance} InboundGuidance
    */
    'InboundGuidance' = undefined;
    /**
    * @member {module:client/models/GuidanceReasonList} GuidanceReasonList
    */
    'GuidanceReasonList' = undefined;




}