/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LabelSpecification from './LabelSpecification';
import RateId from './RateId';

/**
* The PurchaseLabelsRequest model module.
* @module client/models/PurchaseLabelsRequest
* @version v1
*/
export default class PurchaseLabelsRequest {
    /**
    * Constructs a new <code>PurchaseLabelsRequest</code>.
    * The request schema for the purchaseLabels operation.
    * @alias module:client/models/PurchaseLabelsRequest
    * @class
    * @param rateId {module:client/models/RateId} 
    * @param labelSpecification {module:client/models/LabelSpecification} 
    */

    constructor(rateId, labelSpecification) {
        
        
        this['rateId'] = rateId;
        this['labelSpecification'] = labelSpecification;
        
    }

    /**
    * Constructs a <code>PurchaseLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PurchaseLabelsRequest} obj Optional instance to populate.
    * @return {module:client/models/PurchaseLabelsRequest} The populated <code>PurchaseLabelsRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseLabelsRequest();
                        
            
            if (data.hasOwnProperty('rateId')) {
                obj['rateId'] = RateId.constructFromObject(data['rateId']);
            }
            if (data.hasOwnProperty('labelSpecification')) {
                obj['labelSpecification'] = LabelSpecification.constructFromObject(data['labelSpecification']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/RateId} rateId
    */
    'rateId' = undefined;
    /**
    * @member {module:client/models/LabelSpecification} labelSpecification
    */
    'labelSpecification' = undefined;




}