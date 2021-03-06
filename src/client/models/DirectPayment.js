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
* The DirectPayment model module.
* @module client/models/DirectPayment
* @version v0
*/
export default class DirectPayment {
    /**
    * Constructs a new <code>DirectPayment</code>.
    * A payment made directly to a seller.
    * @alias module:client/models/DirectPayment
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>DirectPayment</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/DirectPayment} obj Optional instance to populate.
    * @return {module:client/models/DirectPayment} The populated <code>DirectPayment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectPayment();
                        
            
            if (data.hasOwnProperty('DirectPaymentType')) {
                obj['DirectPaymentType'] = ApiClient.convertToType(data['DirectPaymentType'], 'String');
            }
            if (data.hasOwnProperty('DirectPaymentAmount')) {
                obj['DirectPaymentAmount'] = Currency.constructFromObject(data['DirectPaymentAmount']);
            }
        }
        return obj;
    }

    /**
    * The type of payment.  Possible values:  * StoredValueCardRevenue - The amount that is deducted from the seller's account because the seller received money through a stored value card.  * StoredValueCardRefund - The amount that Amazon returns to the seller if the order that is bought using a stored value card is refunded.  * PrivateLabelCreditCardRevenue - The amount that is deducted from the seller's account because the seller received money through a private label credit card offered by Amazon.  * PrivateLabelCreditCardRefund - The amount that Amazon returns to the seller if the order that is bought using a private label credit card offered by Amazon is refunded.  * CollectOnDeliveryRevenue - The COD amount that the seller collected directly from the buyer.  * CollectOnDeliveryRefund - The amount that Amazon refunds to the buyer if an order paid for by COD is refunded.
    * @member {String} DirectPaymentType
    */
    'DirectPaymentType' = undefined;
    /**
    * @member {module:client/models/Currency} DirectPaymentAmount
    */
    'DirectPaymentAmount' = undefined;




}
