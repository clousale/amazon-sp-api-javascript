/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
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
import MarketplaceId from './MarketplaceId';
import SellerSKU from './SellerSKU';
import SmallAndLightEnrollmentStatus from './SmallAndLightEnrollmentStatus';

/**
* The SmallAndLightEnrollment model module.
* @module client/models/SmallAndLightEnrollment
* @version v1
*/
export default class SmallAndLightEnrollment {
    /**
    * Constructs a new <code>SmallAndLightEnrollment</code>.
    * The Small and Light enrollment status of the item indicated by the specified seller SKU.
    * @alias module:client/models/SmallAndLightEnrollment
    * @class
    * @param marketplaceId {module:client/models/MarketplaceId} 
    * @param sellerSKU {module:client/models/SellerSKU} 
    * @param status {module:client/models/SmallAndLightEnrollmentStatus} 
    */

    constructor(marketplaceId, sellerSKU, status) {
        
        
        this['marketplaceId'] = marketplaceId;
        this['sellerSKU'] = sellerSKU;
        this['status'] = status;
        
    }

    /**
    * Constructs a <code>SmallAndLightEnrollment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/SmallAndLightEnrollment} obj Optional instance to populate.
    * @return {module:client/models/SmallAndLightEnrollment} The populated <code>SmallAndLightEnrollment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmallAndLightEnrollment();
                        
            
            if (data.hasOwnProperty('marketplaceId')) {
                obj['marketplaceId'] = MarketplaceId.constructFromObject(data['marketplaceId']);
            }
            if (data.hasOwnProperty('sellerSKU')) {
                obj['sellerSKU'] = SellerSKU.constructFromObject(data['sellerSKU']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SmallAndLightEnrollmentStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/MarketplaceId} marketplaceId
    */
    'marketplaceId' = undefined;
    /**
    * @member {module:client/models/SellerSKU} sellerSKU
    */
    'sellerSKU' = undefined;
    /**
    * @member {module:client/models/SmallAndLightEnrollmentStatus} status
    */
    'status' = undefined;




}