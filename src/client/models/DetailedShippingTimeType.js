/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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

/**
* The DetailedShippingTimeType model module.
* @module client/models/DetailedShippingTimeType
* @version v0
*/
export default class DetailedShippingTimeType {
    /**
    * Constructs a new <code>DetailedShippingTimeType</code>.
    * The time range in which an item will likely be shipped once an order has been placed.
    * @alias module:client/models/DetailedShippingTimeType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DetailedShippingTimeType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/DetailedShippingTimeType} obj Optional instance to populate.
    * @return {module:client/models/DetailedShippingTimeType} The populated <code>DetailedShippingTimeType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DetailedShippingTimeType();
                        
            
            if (data.hasOwnProperty('minimumHours')) {
                obj['minimumHours'] = ApiClient.convertToType(data['minimumHours'], 'Number');
            }
            if (data.hasOwnProperty('maximumHours')) {
                obj['maximumHours'] = ApiClient.convertToType(data['maximumHours'], 'Number');
            }
            if (data.hasOwnProperty('availableDate')) {
                obj['availableDate'] = ApiClient.convertToType(data['availableDate'], 'Number');
            }
            if (data.hasOwnProperty('availabilityType')) {
                obj['availabilityType'] = ApiClient.convertToType(data['availabilityType'], 'String');
            }
        }
        return obj;
    }

    /**
    * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
    * @member {Number} minimumHours
    */
    'minimumHours' = undefined;
    /**
    * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
    * @member {Number} maximumHours
    */
    'maximumHours' = undefined;
    /**
    * The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping.
    * @member {Number} availableDate
    */
    'availableDate' = undefined;
    /**
    * Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE.
    * @member {module:client/models/DetailedShippingTimeType.AvailabilityTypeEnum} availabilityType
    */
    'availabilityType' = undefined;



    /**
    * Allowed values for the <code>availabilityType</code> property.
    * @enum {String}
    * @readonly
    */
    static AvailabilityTypeEnum = {
        /**
         * value: "NOW"
         * @const
         */
        "NOW": "NOW",
        /**
         * value: "FUTURE_WITHOUT_DATE"
         * @const
         */
        "FUTURE_WITHOUT_DATE": "FUTURE_WITHOUT_DATE",
        /**
         * value: "FUTURE_WITH_DATE"
         * @const
         */
        "FUTURE_WITH_DATE": "FUTURE_WITH_DATE"    };

}
