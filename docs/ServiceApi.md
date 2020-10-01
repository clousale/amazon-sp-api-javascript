# SellingPartnerApiForServices.ServiceApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAppointmentForServiceJobByServiceJobId**](ServiceApi.md#addAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments | 
[**cancelServiceJobByServiceJobId**](ServiceApi.md#cancelServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/cancellations | 
[**completeServiceJobByServiceJobId**](ServiceApi.md#completeServiceJobByServiceJobId) | **PUT** /service/v1/serviceJobs/{serviceJobId}/completions | 
[**getServiceJobByServiceJobId**](ServiceApi.md#getServiceJobByServiceJobId) | **GET** /service/v1/serviceJobs/{serviceJobId} | 
[**getServiceJobs**](ServiceApi.md#getServiceJobs) | **GET** /service/v1/serviceJobs | 
[**rescheduleAppointmentForServiceJobByServiceJobId**](ServiceApi.md#rescheduleAppointmentForServiceJobByServiceJobId) | **POST** /service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId} | 

<a name="addAppointmentForServiceJobByServiceJobId"></a>
# **addAppointmentForServiceJobByServiceJobId**
> SetAppointmentResponse addAppointmentForServiceJobByServiceJobId(bodyserviceJobId)



Adds an appointment to the service job indicated by the service job identifier you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let body = new SellingPartnerApiForServices.AddAppointmentRequest(); // AddAppointmentRequest | Add appointment operation input details.
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.

apiInstance.addAppointmentForServiceJobByServiceJobId(bodyserviceJobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddAppointmentRequest**](AddAppointmentRequest.md)| Add appointment operation input details. | 
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 

### Return type

[**SetAppointmentResponse**](SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelServiceJobByServiceJobId"></a>
# **cancelServiceJobByServiceJobId**
> CancelServiceJobByServiceJobIdResponse cancelServiceJobByServiceJobId(serviceJobId, cancellationReasonCode)



Cancels the service job indicated by the service job identifier you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
let cancellationReasonCode = "cancellationReasonCode_example"; // String | A cancel reason code that specifies the reason for cancelling a service job.

apiInstance.cancelServiceJobByServiceJobId(serviceJobId, cancellationReasonCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 
 **cancellationReasonCode** | **String**| A cancel reason code that specifies the reason for cancelling a service job. | 

### Return type

[**CancelServiceJobByServiceJobIdResponse**](CancelServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="completeServiceJobByServiceJobId"></a>
# **completeServiceJobByServiceJobId**
> CompleteServiceJobByServiceJobIdResponse completeServiceJobByServiceJobId(serviceJobId)



Completes the service job indicated by the service job identifier you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.

apiInstance.completeServiceJobByServiceJobId(serviceJobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 

### Return type

[**CompleteServiceJobByServiceJobIdResponse**](CompleteServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServiceJobByServiceJobId"></a>
# **getServiceJobByServiceJobId**
> GetServiceJobByServiceJobIdResponse getServiceJobByServiceJobId(serviceJobId)



Gets service job details for the service job indicated by the service job identifier you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let serviceJobId = "serviceJobId_example"; // String | A service job identifier.

apiInstance.getServiceJobByServiceJobId(serviceJobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceJobId** | **String**| A service job identifier. | 

### Return type

[**GetServiceJobByServiceJobIdResponse**](GetServiceJobByServiceJobIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getServiceJobs"></a>
# **getServiceJobs**
> GetServiceJobsResponse getServiceJobs(marketplaceIds, opts)



Gets service job details for the specified filter query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let marketplaceIds = ["marketplaceIds_example"]; // [String] | Used to select jobs that were placed in the specified marketplaces. 
let opts = { 
  'serviceOrderIds': ["serviceOrderIds_example"], // [String] | List of service order ids for the query you want to perform.Max values supported 20. 
  'serviceJobStatus': ["serviceJobStatus_example"], // [String] | A list of one or more job status by which to filter the list of jobs.
  'pageToken': "pageToken_example", // String | String returned in the response of your previous request.
  'pageSize': 20, // Number | A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20. 
  'sortField': "sortField_example", // String | Sort fields on which you want to sort the output.
  'sortOrder': "sortOrder_example", // String | sort order for the query you want to perform. 
  'createdAfter': "createdAfter_example", // String | A date used for selecting jobs created after (or at) a specified time must be in ISO 8601 format. Required if LastUpdatedAfter is not specified.Specifying both CreatedAfter and LastUpdatedAfter returns an error. 
  'createdBefore': "createdBefore_example", // String | A date used for selecting jobs created before (or at) a specified time must be in ISO 8601 format. 
  'lastUpdatedAfter': "lastUpdatedAfter_example", // String | A date used for selecting jobs updated after (or at) a specified time must be in ISO 8601 format. Required if createdAfter is not specified.Specifying both CreatedAfter and LastUpdatedAfter returns an error. 
  'lastUpdatedBefore': "lastUpdatedBefore_example", // String | A date used for selecting jobs updated before (or at) a specified time must be in ISO 8601 format. 
  'scheduleStartDate': "scheduleStartDate_example", // String | A date used for filtering jobs schedule after (or at) a specified time must be in ISO 8601 format. schedule end date should not be earlier than schedule start date. 
  'scheduleEndDate': "scheduleEndDate_example" // String | A date used for filtering jobs schedule before (or at) a specified time must be in ISO 8601 format. schedule end date should not be earlier than schedule start date. 
};
apiInstance.getServiceJobs(marketplaceIds, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| Used to select jobs that were placed in the specified marketplaces.  | 
 **serviceOrderIds** | [**[String]**](String.md)| List of service order ids for the query you want to perform.Max values supported 20.  | [optional] 
 **serviceJobStatus** | [**[String]**](String.md)| A list of one or more job status by which to filter the list of jobs. | [optional] 
 **pageToken** | **String**| String returned in the response of your previous request. | [optional] 
 **pageSize** | **Number**| A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20.  | [optional] [default to 20]
 **sortField** | **String**| Sort fields on which you want to sort the output. | [optional] 
 **sortOrder** | **String**| sort order for the query you want to perform.  | [optional] 
 **createdAfter** | **String**| A date used for selecting jobs created after (or at) a specified time must be in ISO 8601 format. Required if LastUpdatedAfter is not specified.Specifying both CreatedAfter and LastUpdatedAfter returns an error.  | [optional] 
 **createdBefore** | **String**| A date used for selecting jobs created before (or at) a specified time must be in ISO 8601 format.  | [optional] 
 **lastUpdatedAfter** | **String**| A date used for selecting jobs updated after (or at) a specified time must be in ISO 8601 format. Required if createdAfter is not specified.Specifying both CreatedAfter and LastUpdatedAfter returns an error.  | [optional] 
 **lastUpdatedBefore** | **String**| A date used for selecting jobs updated before (or at) a specified time must be in ISO 8601 format.  | [optional] 
 **scheduleStartDate** | **String**| A date used for filtering jobs schedule after (or at) a specified time must be in ISO 8601 format. schedule end date should not be earlier than schedule start date.  | [optional] 
 **scheduleEndDate** | **String**| A date used for filtering jobs schedule before (or at) a specified time must be in ISO 8601 format. schedule end date should not be earlier than schedule start date.  | [optional] 

### Return type

[**GetServiceJobsResponse**](GetServiceJobsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rescheduleAppointmentForServiceJobByServiceJobId"></a>
# **rescheduleAppointmentForServiceJobByServiceJobId**
> SetAppointmentResponse rescheduleAppointmentForServiceJobByServiceJobId(bodyserviceJobIdappointmentId)



Reschedules an appointment for the service job indicated by the service job identifier you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForServices from 'selling_partner_api_for_services';

let apiInstance = new SellingPartnerApiForServices.ServiceApi();
let body = new SellingPartnerApiForServices.RescheduleAppointmentRequest(); // RescheduleAppointmentRequest | Reschedule appointment operation input details.
let serviceJobId = "serviceJobId_example"; // String | An Amazon defined service job identifier.
let appointmentId = "appointmentId_example"; // String | An existing appointment identifier for the Service Job.

apiInstance.rescheduleAppointmentForServiceJobByServiceJobId(bodyserviceJobIdappointmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RescheduleAppointmentRequest**](RescheduleAppointmentRequest.md)| Reschedule appointment operation input details. | 
 **serviceJobId** | **String**| An Amazon defined service job identifier. | 
 **appointmentId** | **String**| An existing appointment identifier for the Service Job. | 

### Return type

[**SetAppointmentResponse**](SetAppointmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

