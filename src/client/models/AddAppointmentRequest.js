/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
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
import AppointmentTimeInput from './AppointmentTimeInput';

/**
* The AddAppointmentRequest model module.
* @module client/models/AddAppointmentRequest
* @version v1
*/
export default class AddAppointmentRequest {
    /**
    * Constructs a new <code>AddAppointmentRequest</code>.
    * Input for add appointment operation.
    * @alias module:client/models/AddAppointmentRequest
    * @class
    * @param appointmentTime {module:client/models/AppointmentTimeInput} 
    */

    constructor(appointmentTime) {
        
        
        this['appointmentTime'] = appointmentTime;
        
    }

    /**
    * Constructs a <code>AddAppointmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AddAppointmentRequest} obj Optional instance to populate.
    * @return {module:client/models/AddAppointmentRequest} The populated <code>AddAppointmentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddAppointmentRequest();
                        
            
            if (data.hasOwnProperty('appointmentTime')) {
                obj['appointmentTime'] = AppointmentTimeInput.constructFromObject(data['appointmentTime']);
            }
        }
        return obj;
    }

    /**
    * @member {module:client/models/AppointmentTimeInput} appointmentTime
    */
    'appointmentTime' = undefined;




}
