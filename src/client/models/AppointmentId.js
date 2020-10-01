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
* The AppointmentId model module.
* @module client/models/AppointmentId
* @version v1
*/
export default class AppointmentId {
    /**
    * Constructs a new <code>AppointmentId</code>.
    * The appointment identifier.
    * @alias module:client/models/AppointmentId
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AppointmentId</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/models/AppointmentId} obj Optional instance to populate.
    * @return {module:client/models/AppointmentId} The populated <code>AppointmentId</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentId();
                        
            
        }
        return obj;
    }





}
