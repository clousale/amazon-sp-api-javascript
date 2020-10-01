/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import Money from './Money';

/**
* The PaymentExecutionDetailItem model module.
* @module client/models/PaymentExecutionDetailItem
* @version v0
*/
export default class PaymentExecutionDetailItem {
    /**
    * Constructs a new <code>PaymentExecutionDetailItem</code>.
    * Information about a sub-payment method used to pay for a COD order.
    * @alias module:client/models/PaymentExecutionDetailItem
    * @class
    * @param payment {module:client/models/Money} 
    * @param paymentMethod {String} A sub-payment method for a COD order.  Possible values:  * COD - Cash On Delivery.  * GC - Gift Card.  * PointsAccount - Amazon Points.
    */

    constructor(payment, paymentMethod) {
        
        
        this['Payment'] = payment;
        this['PaymentMethod'] = paymentMethod;
        
    }

    /**
    * Constructs a <code>PaymentExecutionDetailItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/PaymentExecutionDetailItem} obj Optional instance to populate.
    * @return {module:client/models/PaymentExecutionDetailItem} The populated <code>PaymentExecutionDetailItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentExecutionDetailItem();
                        
            
            if (data.hasOwnProperty('Payment')) {
                obj['Payment'] = Money.constructFromObject(data['Payment']);
            }
            if (data.hasOwnProperty('PaymentMethod')) {
                obj['PaymentMethod'] = ApiClient.convertToType(data['PaymentMethod'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/Money} Payment
    */
    'Payment' = undefined;
    /**
    * A sub-payment method for a COD order.  Possible values:  * COD - Cash On Delivery.  * GC - Gift Card.  * PointsAccount - Amazon Points.
    * @member {String} PaymentMethod
    */
    'PaymentMethod' = undefined;




}
