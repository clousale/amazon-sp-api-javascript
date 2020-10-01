/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import MoneyType from './MoneyType';
import Points from './Points';

/**
* The PriceToEstimateFees model module.
* @module client/models/PriceToEstimateFees
* @version v0
*/
export default class PriceToEstimateFees {
    /**
    * Constructs a new <code>PriceToEstimateFees</code>.
    * Price information for an item, used to estimate fees.
    * @alias module:client/models/PriceToEstimateFees
    * @class
    * @param listingPrice {module:client/models/MoneyType} 
    */

    constructor(listingPrice) {
        
        
        this['ListingPrice'] = listingPrice;
        
    }

    /**
    * Constructs a <code>PriceToEstimateFees</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PriceToEstimateFees} obj Optional instance to populate.
    * @return {module:client/models/PriceToEstimateFees} The populated <code>PriceToEstimateFees</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceToEstimateFees();
                        
            
            if (data.hasOwnProperty('ListingPrice')) {
                obj['ListingPrice'] = MoneyType.constructFromObject(data['ListingPrice']);
            }
            if (data.hasOwnProperty('Shipping')) {
                obj['Shipping'] = MoneyType.constructFromObject(data['Shipping']);
            }
            if (data.hasOwnProperty('Points')) {
                obj['Points'] = Points.constructFromObject(data['Points']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/MoneyType} ListingPrice
    */
    'ListingPrice' = undefined;
    /**
    * @member {module:client/models/MoneyType} Shipping
    */
    'Shipping' = undefined;
    /**
    * @member {module:client/models/Points} Points
    */
    'Points' = undefined;




}
