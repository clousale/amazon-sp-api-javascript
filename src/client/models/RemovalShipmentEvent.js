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
import ModelDate from './ModelDate';
import RemovalShipmentItemList from './RemovalShipmentItemList';

/**
* The RemovalShipmentEvent model module.
* @module client/models/RemovalShipmentEvent
* @version v0
*/
export default class RemovalShipmentEvent {
    /**
    * Constructs a new <code>RemovalShipmentEvent</code>.
    * A removal shipment event for a removal order.
    * @alias module:client/models/RemovalShipmentEvent
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RemovalShipmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/RemovalShipmentEvent} obj Optional instance to populate.
    * @return {module:client/models/RemovalShipmentEvent} The populated <code>RemovalShipmentEvent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemovalShipmentEvent();
                        
            
            if (data.hasOwnProperty('PostedDate')) {
                obj['PostedDate'] = ModelDate.constructFromObject(data['PostedDate']);
            }
            if (data.hasOwnProperty('OrderId')) {
                obj['OrderId'] = ApiClient.convertToType(data['OrderId'], 'String');
            }
            if (data.hasOwnProperty('TransactionType')) {
                obj['TransactionType'] = ApiClient.convertToType(data['TransactionType'], 'String');
            }
            if (data.hasOwnProperty('RemovalShipmentItemList')) {
                obj['RemovalShipmentItemList'] = RemovalShipmentItemList.constructFromObject(data['RemovalShipmentItemList']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/ModelDate} PostedDate
    */
    'PostedDate' = undefined;
    /**
    * The identifier for the removal shipment order.
    * @member {String} OrderId
    */
    'OrderId' = undefined;
    /**
    * The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION
    * @member {String} TransactionType
    */
    'TransactionType' = undefined;
    /**
    * @member {module:client/models/RemovalShipmentItemList} RemovalShipmentItemList
    */
    'RemovalShipmentItemList' = undefined;




}
