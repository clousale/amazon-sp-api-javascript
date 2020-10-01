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

/**
* The AppointmentTime model module.
* @module client/models/AppointmentTime
* @version v1
*/
export default class AppointmentTime {
    /**
    * Constructs a new <code>AppointmentTime</code>.
    * The time of the appointment window.
    * @alias module:client/models/AppointmentTime
    * @class
    * @param startTime {Date} The date and time of the start of the appointment window, in ISO 8601 format.
    * @param durationInMinutes {Number} The duration of the appointment window, in minutes.
    */

    constructor(startTime, durationInMinutes) {
        
        
        this['startTime'] = startTime;
        this['durationInMinutes'] = durationInMinutes;
        
    }

    /**
    * Constructs a <code>AppointmentTime</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AppointmentTime} obj Optional instance to populate.
    * @return {module:client/models/AppointmentTime} The populated <code>AppointmentTime</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentTime();
                        
            
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('durationInMinutes')) {
                obj['durationInMinutes'] = ApiClient.convertToType(data['durationInMinutes'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The date and time of the start of the appointment window, in ISO 8601 format.
    * @member {Date} startTime
    */
    'startTime' = undefined;
    /**
    * The duration of the appointment window, in minutes.
    * @member {Number} durationInMinutes
    */
    'durationInMinutes' = undefined;




}
