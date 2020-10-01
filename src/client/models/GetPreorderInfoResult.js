/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import DateStringType from './DateStringType';

/**
* The GetPreorderInfoResult model module.
* @module client/models/GetPreorderInfoResult
* @version v0
*/
export default class GetPreorderInfoResult {
    /**
    * Constructs a new <code>GetPreorderInfoResult</code>.
    * @alias module:client/models/GetPreorderInfoResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>GetPreorderInfoResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/GetPreorderInfoResult} obj Optional instance to populate.
    * @return {module:client/models/GetPreorderInfoResult} The populated <code>GetPreorderInfoResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPreorderInfoResult();
                        
            
            if (data.hasOwnProperty('ShipmentContainsPreorderableItems')) {
                obj['ShipmentContainsPreorderableItems'] = ApiClient.convertToType(data['ShipmentContainsPreorderableItems'], 'Boolean');
            }
            if (data.hasOwnProperty('ShipmentConfirmedForPreorder')) {
                obj['ShipmentConfirmedForPreorder'] = ApiClient.convertToType(data['ShipmentConfirmedForPreorder'], 'Boolean');
            }
            if (data.hasOwnProperty('NeedByDate')) {
                obj['NeedByDate'] = DateStringType.constructFromObject(data['NeedByDate']);
            }
            if (data.hasOwnProperty('ConfirmedFulfillableDate')) {
                obj['ConfirmedFulfillableDate'] = DateStringType.constructFromObject(data['ConfirmedFulfillableDate']);
            }
        }
        return obj;
    }

    /**
    * Indicates whether the shipment contains items that have been enabled for pre-order. For more information about enabling items for pre-order, see the Seller Central Help.
    * @member {Boolean} ShipmentContainsPreorderableItems
    */
    'ShipmentContainsPreorderableItems' = undefined;
    /**
    * Indicates whether this shipment has been confirmed for pre-order.
    * @member {Boolean} ShipmentConfirmedForPreorder
    */
    'ShipmentConfirmedForPreorder' = undefined;
    /**
    * @member {module:client/models/DateStringType} NeedByDate
    */
    'NeedByDate' = undefined;
    /**
    * @member {module:client/models/DateStringType} ConfirmedFulfillableDate
    */
    'ConfirmedFulfillableDate' = undefined;




}
