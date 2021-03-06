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
import ChargeComponentList from './ChargeComponentList';
import Currency from './Currency';
import FeeComponentList from './FeeComponentList';
import ModelDate from './ModelDate';
import TaxWithheldComponentList from './TaxWithheldComponentList';

/**
* The RentalTransactionEvent model module.
* @module client/models/RentalTransactionEvent
* @version v0
*/
export default class RentalTransactionEvent {
    /**
    * Constructs a new <code>RentalTransactionEvent</code>.
    * An event related to a rental transaction.
    * @alias module:client/models/RentalTransactionEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RentalTransactionEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RentalTransactionEvent} obj Optional instance to populate.
    * @return {module:client/models/RentalTransactionEvent} The populated <code>RentalTransactionEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RentalTransactionEvent();
                        
            
            if (data.hasOwnProperty('AmazonOrderId')) {
                obj['AmazonOrderId'] = ApiClient.convertToType(data['AmazonOrderId'], 'String');
            }
            if (data.hasOwnProperty('RentalEventType')) {
                obj['RentalEventType'] = ApiClient.convertToType(data['RentalEventType'], 'String');
            }
            if (data.hasOwnProperty('ExtensionLength')) {
                obj['ExtensionLength'] = ApiClient.convertToType(data['ExtensionLength'], 'Number');
            }
            if (data.hasOwnProperty('PostedDate')) {
                obj['PostedDate'] = ModelDate.constructFromObject(data['PostedDate']);
            }
            if (data.hasOwnProperty('RentalChargeList')) {
                obj['RentalChargeList'] = ChargeComponentList.constructFromObject(data['RentalChargeList']);
            }
            if (data.hasOwnProperty('RentalFeeList')) {
                obj['RentalFeeList'] = FeeComponentList.constructFromObject(data['RentalFeeList']);
            }
            if (data.hasOwnProperty('MarketplaceName')) {
                obj['MarketplaceName'] = ApiClient.convertToType(data['MarketplaceName'], 'String');
            }
            if (data.hasOwnProperty('RentalInitialValue')) {
                obj['RentalInitialValue'] = Currency.constructFromObject(data['RentalInitialValue']);
            }
            if (data.hasOwnProperty('RentalReimbursement')) {
                obj['RentalReimbursement'] = Currency.constructFromObject(data['RentalReimbursement']);
            }
            if (data.hasOwnProperty('RentalTaxWithheldList')) {
                obj['RentalTaxWithheldList'] = TaxWithheldComponentList.constructFromObject(data['RentalTaxWithheldList']);
            }
        }
        return obj;
    }

    /**
    * An Amazon-defined identifier for an order.
    * @member {String} AmazonOrderId
    */
    'AmazonOrderId' = undefined;
    /**
    * The type of rental event.  Possible values:  * RentalCustomerPayment-Buyout - Transaction type that represents when the customer wants to buy out a rented item.  * RentalCustomerPayment-Extension - Transaction type that represents when the customer wants to extend the rental period.  * RentalCustomerRefund-Buyout - Transaction type that represents when the customer requests a refund for the buyout of the rented item.  * RentalCustomerRefund-Extension - Transaction type that represents when the customer requests a refund over the extension on the rented item.  * RentalHandlingFee - Transaction type that represents the fee that Amazon charges sellers who rent through Amazon.  * RentalChargeFailureReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.  * RentalLostItemReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
    * @member {String} RentalEventType
    */
    'RentalEventType' = undefined;
    /**
    * The number of days that the buyer extended an already rented item. This value is only returned for RentalCustomerPayment-Extension and RentalCustomerRefund-Extension events.
    * @member {Number} ExtensionLength
    */
    'ExtensionLength' = undefined;
    /**
    * @member {module:client/models/ModelDate} PostedDate
    */
    'PostedDate' = undefined;
    /**
    * @member {module:client/models/ChargeComponentList} RentalChargeList
    */
    'RentalChargeList' = undefined;
    /**
    * @member {module:client/models/FeeComponentList} RentalFeeList
    */
    'RentalFeeList' = undefined;
    /**
    * The name of the marketplace.
    * @member {String} MarketplaceName
    */
    'MarketplaceName' = undefined;
    /**
    * @member {module:client/models/Currency} RentalInitialValue
    */
    'RentalInitialValue' = undefined;
    /**
    * @member {module:client/models/Currency} RentalReimbursement
    */
    'RentalReimbursement' = undefined;
    /**
    * @member {module:client/models/TaxWithheldComponentList} RentalTaxWithheldList
    */
    'RentalTaxWithheldList' = undefined;




}
