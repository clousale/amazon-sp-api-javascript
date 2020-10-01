/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import Currency from './Currency';

/**
* The FeeComponent model module.
* @module client/models/FeeComponent
* @version v0
*/
export default class FeeComponent {
    /**
    * Constructs a new <code>FeeComponent</code>.
    * A fee associated with the event.
    * @alias module:client/models/FeeComponent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>FeeComponent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FeeComponent} obj Optional instance to populate.
    * @return {module:client/models/FeeComponent} The populated <code>FeeComponent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeComponent();
                        
            
            if (data.hasOwnProperty('FeeType')) {
                obj['FeeType'] = ApiClient.convertToType(data['FeeType'], 'String');
            }
            if (data.hasOwnProperty('FeeAmount')) {
                obj['FeeAmount'] = Currency.constructFromObject(data['FeeAmount']);
            }
        }
        return obj;
    }

    /**
    * The type of fee. For more information about Selling on Amazon fees, see [Selling on Amazon Fee Schedule](https://sellercentral.amazon.com/gp/help/200336920) on Seller Central. For more information about Fulfillment by Amazon fees, see [FBA features, services and fees](https://sellercentral.amazon.com/gp/help/201074400) on Seller Central.
    * @member {String} FeeType
    */
    'FeeType' = undefined;
    /**
    * @member {module:client/models/Currency} FeeAmount
    */
    'FeeAmount' = undefined;




}