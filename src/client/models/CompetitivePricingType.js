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
import CompetitivePriceList from './CompetitivePriceList';
import MoneyType from './MoneyType';
import NumberOfOfferListingsList from './NumberOfOfferListingsList';

/**
* The CompetitivePricingType model module.
* @module client/models/CompetitivePricingType
* @version v0
*/
export default class CompetitivePricingType {
    /**
    * Constructs a new <code>CompetitivePricingType</code>.
    * Competitive pricing information for the item.
    * @alias module:client/models/CompetitivePricingType
    * @class
    * @param competitivePrices {module:client/models/CompetitivePriceList} 
    * @param numberOfOfferListings {module:client/models/NumberOfOfferListingsList} 
    */

    constructor(competitivePrices, numberOfOfferListings) {
        
        
        this['CompetitivePrices'] = competitivePrices;
        this['NumberOfOfferListings'] = numberOfOfferListings;
        
    }

    /**
    * Constructs a <code>CompetitivePricingType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/CompetitivePricingType} obj Optional instance to populate.
    * @return {module:client/models/CompetitivePricingType} The populated <code>CompetitivePricingType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetitivePricingType();
                        
            
            if (data.hasOwnProperty('CompetitivePrices')) {
                obj['CompetitivePrices'] = CompetitivePriceList.constructFromObject(data['CompetitivePrices']);
            }
            if (data.hasOwnProperty('NumberOfOfferListings')) {
                obj['NumberOfOfferListings'] = NumberOfOfferListingsList.constructFromObject(data['NumberOfOfferListings']);
            }
            if (data.hasOwnProperty('TradeInValue')) {
                obj['TradeInValue'] = MoneyType.constructFromObject(data['TradeInValue']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/CompetitivePriceList} CompetitivePrices
    */
    'CompetitivePrices' = undefined;
    /**
    * @member {module:client/models/NumberOfOfferListingsList} NumberOfOfferListings
    */
    'NumberOfOfferListings' = undefined;
    /**
    * @member {module:client/models/MoneyType} TradeInValue
    */
    'TradeInValue' = undefined;




}
