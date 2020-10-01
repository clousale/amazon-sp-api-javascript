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

/**
* The LabelSpecification model module.
* @module client/models/LabelSpecification
* @version v1
*/
export default class LabelSpecification {
    /**
    * Constructs a new <code>LabelSpecification</code>.
    * The label specification info.
    * @alias module:client/models/LabelSpecification
    * @class
    * @param labelFormat {module:client/models/LabelSpecification.LabelFormatEnum} The format of the label. Enum of PNG only for now.
    * @param labelStockSize {module:client/models/LabelSpecification.LabelStockSizeEnum} The label stock size specification in length and height. Enum of 4x6 only for now.
    */

    constructor(labelFormat, labelStockSize) {
        
        
        this['labelFormat'] = labelFormat;
        this['labelStockSize'] = labelStockSize;
        
    }

    /**
    * Constructs a <code>LabelSpecification</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/LabelSpecification} obj Optional instance to populate.
    * @return {module:client/models/LabelSpecification} The populated <code>LabelSpecification</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabelSpecification();
                        
            
            if (data.hasOwnProperty('labelFormat')) {
                obj['labelFormat'] = ApiClient.convertToType(data['labelFormat'], 'String');
            }
            if (data.hasOwnProperty('labelStockSize')) {
                obj['labelStockSize'] = ApiClient.convertToType(data['labelStockSize'], 'String');
            }
        }
        return obj;
    }

    /**
    * The format of the label. Enum of PNG only for now.
    * @member {module:client/models/LabelSpecification.LabelFormatEnum} labelFormat
    */
    'labelFormat' = undefined;
    /**
    * The label stock size specification in length and height. Enum of 4x6 only for now.
    * @member {module:client/models/LabelSpecification.LabelStockSizeEnum} labelStockSize
    */
    'labelStockSize' = undefined;



    /**
    * Allowed values for the <code>labelFormat</code> property.
    * @enum {String}
    * @readonly
    */
    static LabelFormatEnum = {
        /**
         * value: "PNG"
         * @const
         */
        "PNG": "PNG"    };
    /**
    * Allowed values for the <code>labelStockSize</code> property.
    * @enum {String}
    * @readonly
    */
    static LabelStockSizeEnum = {
        /**
         * value: "4x6"
         * @const
         */
        "4x6": "4x6"    };

}