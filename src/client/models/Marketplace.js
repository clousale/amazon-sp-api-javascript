/**
 * Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
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
* The Marketplace model module.
* @module client/models/Marketplace
* @version v1
*/
export default class Marketplace {
    /**
    * Constructs a new <code>Marketplace</code>.
    * Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items.
    * @alias module:client/models/Marketplace
    * @class
    * @param id {String} The encrypted marketplace value.
    * @param name {String} Marketplace name.
    * @param countryCode {String} The ISO 3166-1 alpha-2 format country code of the marketplace.
    * @param defaultCurrencyCode {String} The ISO 4217 format currency code of the marketplace.
    * @param defaultLanguageCode {String} The ISO 639-1 format language code of the marketplace.
    * @param domainName {String} The domain name of the marketplace.
    */

    constructor(id, name, countryCode, defaultCurrencyCode, defaultLanguageCode, domainName) {
        
        
        this['id'] = id;
        this['name'] = name;
        this['countryCode'] = countryCode;
        this['defaultCurrencyCode'] = defaultCurrencyCode;
        this['defaultLanguageCode'] = defaultLanguageCode;
        this['domainName'] = domainName;
        
    }

    /**
    * Constructs a <code>Marketplace</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/Marketplace} obj Optional instance to populate.
    * @return {module:client/models/Marketplace} The populated <code>Marketplace</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Marketplace();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('defaultCurrencyCode')) {
                obj['defaultCurrencyCode'] = ApiClient.convertToType(data['defaultCurrencyCode'], 'String');
            }
            if (data.hasOwnProperty('defaultLanguageCode')) {
                obj['defaultLanguageCode'] = ApiClient.convertToType(data['defaultLanguageCode'], 'String');
            }
            if (data.hasOwnProperty('domainName')) {
                obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
            }
        }
        return obj;
    }

    /**
    * The encrypted marketplace value.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Marketplace name.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The ISO 3166-1 alpha-2 format country code of the marketplace.
    * @member {String} countryCode
    */
    'countryCode' = undefined;
    /**
    * The ISO 4217 format currency code of the marketplace.
    * @member {String} defaultCurrencyCode
    */
    'defaultCurrencyCode' = undefined;
    /**
    * The ISO 639-1 format language code of the marketplace.
    * @member {String} defaultLanguageCode
    */
    'defaultLanguageCode' = undefined;
    /**
    * The domain name of the marketplace.
    * @member {String} domainName
    */
    'domainName' = undefined;




}
