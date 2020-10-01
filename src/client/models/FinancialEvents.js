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
import AdjustmentEventList from './AdjustmentEventList';
import AffordabilityExpenseEventList from './AffordabilityExpenseEventList';
import CouponPaymentEventList from './CouponPaymentEventList';
import DebtRecoveryEventList from './DebtRecoveryEventList';
import FBALiquidationEventList from './FBALiquidationEventList';
import ImagingServicesFeeEventList from './ImagingServicesFeeEventList';
import LoanServicingEventList from './LoanServicingEventList';
import NetworkComminglingTransactionEventList from './NetworkComminglingTransactionEventList';
import PayWithAmazonEventList from './PayWithAmazonEventList';
import ProductAdsPaymentEventList from './ProductAdsPaymentEventList';
import RentalTransactionEventList from './RentalTransactionEventList';
import RetrochargeEventList from './RetrochargeEventList';
import SAFETReimbursementEventList from './SAFETReimbursementEventList';
import SellerDealPaymentEventList from './SellerDealPaymentEventList';
import SellerReviewEnrollmentPaymentEventList from './SellerReviewEnrollmentPaymentEventList';
import ServiceFeeEventList from './ServiceFeeEventList';
import ShipmentEventList from './ShipmentEventList';
import SolutionProviderCreditEventList from './SolutionProviderCreditEventList';

/**
* The FinancialEvents model module.
* @module client/models/FinancialEvents
* @version v0
*/
export default class FinancialEvents {
    /**
    * Constructs a new <code>FinancialEvents</code>.
    * Contains all information related to a financial event.
    * @alias module:client/models/FinancialEvents
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>FinancialEvents</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/FinancialEvents} obj Optional instance to populate.
    * @return {module:client/models/FinancialEvents} The populated <code>FinancialEvents</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialEvents();
                        
            
            if (data.hasOwnProperty('ShipmentEventList')) {
                obj['ShipmentEventList'] = ShipmentEventList.constructFromObject(data['ShipmentEventList']);
            }
            if (data.hasOwnProperty('RefundEventList')) {
                obj['RefundEventList'] = ShipmentEventList.constructFromObject(data['RefundEventList']);
            }
            if (data.hasOwnProperty('GuaranteeClaimEventList')) {
                obj['GuaranteeClaimEventList'] = ShipmentEventList.constructFromObject(data['GuaranteeClaimEventList']);
            }
            if (data.hasOwnProperty('ChargebackEventList')) {
                obj['ChargebackEventList'] = ShipmentEventList.constructFromObject(data['ChargebackEventList']);
            }
            if (data.hasOwnProperty('PayWithAmazonEventList')) {
                obj['PayWithAmazonEventList'] = PayWithAmazonEventList.constructFromObject(data['PayWithAmazonEventList']);
            }
            if (data.hasOwnProperty('ServiceProviderCreditEventList')) {
                obj['ServiceProviderCreditEventList'] = SolutionProviderCreditEventList.constructFromObject(data['ServiceProviderCreditEventList']);
            }
            if (data.hasOwnProperty('RetrochargeEventList')) {
                obj['RetrochargeEventList'] = RetrochargeEventList.constructFromObject(data['RetrochargeEventList']);
            }
            if (data.hasOwnProperty('RentalTransactionEventList')) {
                obj['RentalTransactionEventList'] = RentalTransactionEventList.constructFromObject(data['RentalTransactionEventList']);
            }
            if (data.hasOwnProperty('ProductAdsPaymentEventList')) {
                obj['ProductAdsPaymentEventList'] = ProductAdsPaymentEventList.constructFromObject(data['ProductAdsPaymentEventList']);
            }
            if (data.hasOwnProperty('ServiceFeeEventList')) {
                obj['ServiceFeeEventList'] = ServiceFeeEventList.constructFromObject(data['ServiceFeeEventList']);
            }
            if (data.hasOwnProperty('SellerDealPaymentEventList')) {
                obj['SellerDealPaymentEventList'] = SellerDealPaymentEventList.constructFromObject(data['SellerDealPaymentEventList']);
            }
            if (data.hasOwnProperty('DebtRecoveryEventList')) {
                obj['DebtRecoveryEventList'] = DebtRecoveryEventList.constructFromObject(data['DebtRecoveryEventList']);
            }
            if (data.hasOwnProperty('LoanServicingEventList')) {
                obj['LoanServicingEventList'] = LoanServicingEventList.constructFromObject(data['LoanServicingEventList']);
            }
            if (data.hasOwnProperty('AdjustmentEventList')) {
                obj['AdjustmentEventList'] = AdjustmentEventList.constructFromObject(data['AdjustmentEventList']);
            }
            if (data.hasOwnProperty('SAFETReimbursementEventList')) {
                obj['SAFETReimbursementEventList'] = SAFETReimbursementEventList.constructFromObject(data['SAFETReimbursementEventList']);
            }
            if (data.hasOwnProperty('SellerReviewEnrollmentPaymentEventList')) {
                obj['SellerReviewEnrollmentPaymentEventList'] = SellerReviewEnrollmentPaymentEventList.constructFromObject(data['SellerReviewEnrollmentPaymentEventList']);
            }
            if (data.hasOwnProperty('FBALiquidationEventList')) {
                obj['FBALiquidationEventList'] = FBALiquidationEventList.constructFromObject(data['FBALiquidationEventList']);
            }
            if (data.hasOwnProperty('CouponPaymentEventList')) {
                obj['CouponPaymentEventList'] = CouponPaymentEventList.constructFromObject(data['CouponPaymentEventList']);
            }
            if (data.hasOwnProperty('ImagingServicesFeeEventList')) {
                obj['ImagingServicesFeeEventList'] = ImagingServicesFeeEventList.constructFromObject(data['ImagingServicesFeeEventList']);
            }
            if (data.hasOwnProperty('NetworkComminglingTransactionEventList')) {
                obj['NetworkComminglingTransactionEventList'] = NetworkComminglingTransactionEventList.constructFromObject(data['NetworkComminglingTransactionEventList']);
            }
            if (data.hasOwnProperty('AffordabilityExpenseEventList')) {
                obj['AffordabilityExpenseEventList'] = AffordabilityExpenseEventList.constructFromObject(data['AffordabilityExpenseEventList']);
            }
            if (data.hasOwnProperty('AffordabilityExpenseReversalEventList')) {
                obj['AffordabilityExpenseReversalEventList'] = AffordabilityExpenseEventList.constructFromObject(data['AffordabilityExpenseReversalEventList']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ShipmentEventList} ShipmentEventList
    */
    'ShipmentEventList' = undefined;
    /**
    * @member {module:client/models/ShipmentEventList} RefundEventList
    */
    'RefundEventList' = undefined;
    /**
    * @member {module:client/models/ShipmentEventList} GuaranteeClaimEventList
    */
    'GuaranteeClaimEventList' = undefined;
    /**
    * @member {module:client/models/ShipmentEventList} ChargebackEventList
    */
    'ChargebackEventList' = undefined;
    /**
    * @member {module:client/models/PayWithAmazonEventList} PayWithAmazonEventList
    */
    'PayWithAmazonEventList' = undefined;
    /**
    * @member {module:client/models/SolutionProviderCreditEventList} ServiceProviderCreditEventList
    */
    'ServiceProviderCreditEventList' = undefined;
    /**
    * @member {module:client/models/RetrochargeEventList} RetrochargeEventList
    */
    'RetrochargeEventList' = undefined;
    /**
    * @member {module:client/models/RentalTransactionEventList} RentalTransactionEventList
    */
    'RentalTransactionEventList' = undefined;
    /**
    * @member {module:client/models/ProductAdsPaymentEventList} ProductAdsPaymentEventList
    */
    'ProductAdsPaymentEventList' = undefined;
    /**
    * @member {module:client/models/ServiceFeeEventList} ServiceFeeEventList
    */
    'ServiceFeeEventList' = undefined;
    /**
    * @member {module:client/models/SellerDealPaymentEventList} SellerDealPaymentEventList
    */
    'SellerDealPaymentEventList' = undefined;
    /**
    * @member {module:client/models/DebtRecoveryEventList} DebtRecoveryEventList
    */
    'DebtRecoveryEventList' = undefined;
    /**
    * @member {module:client/models/LoanServicingEventList} LoanServicingEventList
    */
    'LoanServicingEventList' = undefined;
    /**
    * @member {module:client/models/AdjustmentEventList} AdjustmentEventList
    */
    'AdjustmentEventList' = undefined;
    /**
    * @member {module:client/models/SAFETReimbursementEventList} SAFETReimbursementEventList
    */
    'SAFETReimbursementEventList' = undefined;
    /**
    * @member {module:client/models/SellerReviewEnrollmentPaymentEventList} SellerReviewEnrollmentPaymentEventList
    */
    'SellerReviewEnrollmentPaymentEventList' = undefined;
    /**
    * @member {module:client/models/FBALiquidationEventList} FBALiquidationEventList
    */
    'FBALiquidationEventList' = undefined;
    /**
    * @member {module:client/models/CouponPaymentEventList} CouponPaymentEventList
    */
    'CouponPaymentEventList' = undefined;
    /**
    * @member {module:client/models/ImagingServicesFeeEventList} ImagingServicesFeeEventList
    */
    'ImagingServicesFeeEventList' = undefined;
    /**
    * @member {module:client/models/NetworkComminglingTransactionEventList} NetworkComminglingTransactionEventList
    */
    'NetworkComminglingTransactionEventList' = undefined;
    /**
    * @member {module:client/models/AffordabilityExpenseEventList} AffordabilityExpenseEventList
    */
    'AffordabilityExpenseEventList' = undefined;
    /**
    * @member {module:client/models/AffordabilityExpenseEventList} AffordabilityExpenseReversalEventList
    */
    'AffordabilityExpenseReversalEventList' = undefined;




}