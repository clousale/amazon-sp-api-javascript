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
import LabelStream from './LabelStream';

/**
* The RetrieveShippingLabelResult model module.
* @module client/models/RetrieveShippingLabelResult
* @version v1
*/
export default class RetrieveShippingLabelResult {
    /**
    * Constructs a new <code>RetrieveShippingLabelResult</code>.
    * The payload schema for the retrieveShippingLabel operation.
    * @alias module:client/models/RetrieveShippingLabelResult
    * @class
    * @param labelStream {module:client/models/LabelStream} 
    * @param labelSpecification {module:client/models/LabelSpecification} 
    */

    constructor(labelStream, labelSpecification) {
        
        
        this['labelStream'] = labelStream;
        this['labelSpecification'] = labelSpecification;
        
    }

    /**
    * Constructs a <code>RetrieveShippingLabelResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RetrieveShippingLabelResult} obj Optional instance to populate.
    * @return {module:client/models/RetrieveShippingLabelResult} The populated <code>RetrieveShippingLabelResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RetrieveShippingLabelResult();
                        
            
            if (data.hasOwnProperty('labelStream')) {
                obj['labelStream'] = LabelStream.constructFromObject(data['labelStream']);
            }
            if (data.hasOwnProperty('labelSpecification')) {
                obj['labelSpecification'] = LabelSpecification.constructFromObject(data['labelSpecification']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/LabelStream} labelStream
    */
    'labelStream' = undefined;
    /**
    * @member {module:client/models/LabelSpecification} labelSpecification
    */
    'labelSpecification' = undefined;




}