# SellingPartnerApiForServices.Appointment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointmentId** | [**AppointmentId**](AppointmentId.md) |  | [optional] 
**appointmentStatus** | **String** | The status of the appointment. | [optional] 
**appointmentTime** | [**AppointmentTime**](AppointmentTime.md) |  | [optional] 
**assignedTechnicians** | [**[Technician]**](Technician.md) | A list of technicians assigned to the service job. | [optional] 
**rescheduledAppointmentId** | [**AppointmentId**](AppointmentId.md) |  | [optional] 
**poa** | [**Poa**](Poa.md) |  | [optional] 

<a name="AppointmentStatusEnum"></a>
## Enum: AppointmentStatusEnum

* `ACTIVE` (value: `"ACTIVE"`)
* `CANCELLED` (value: `"CANCELLED"`)
* `COMPLETED` (value: `"COMPLETED"`)

