# SellingPartnerApiForFinances.DefaultApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFinancialEventGroups**](DefaultApi.md#listFinancialEventGroups) | **GET** /finances/v0/financialEventGroups | 
[**listFinancialEvents**](DefaultApi.md#listFinancialEvents) | **GET** /finances/v0/financialEvents | 
[**listFinancialEventsByGroupId**](DefaultApi.md#listFinancialEventsByGroupId) | **GET** /finances/v0/financialEventGroups/{eventGroupId}/financialEvents | 
[**listFinancialEventsByOrderId**](DefaultApi.md#listFinancialEventsByOrderId) | **GET** /finances/v0/orders/{orderId}/financialEvents | 

<a name="listFinancialEventGroups"></a>
# **listFinancialEventGroups**
> ListFinancialEventGroupsResponse listFinancialEventGroups(opts)



Returns financial event groups for a given date range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFinances from 'selling_partner_api_for_finances';

let apiInstance = new SellingPartnerApiForFinances.DefaultApi();
let opts = { 
  'maxResultsPerPage': 100, // Number | The maximum number of results to return per page.
  'financialEventGroupStartedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
  'financialEventGroupStartedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.listFinancialEventGroups(opts, (error, data, response) => {
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
 **maxResultsPerPage** | **Number**| The maximum number of results to return per page. | [optional] [default to 100]
 **financialEventGroupStartedBefore** | **Date**| A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned. | [optional] 
 **financialEventGroupStartedAfter** | **Date**| A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted. | [optional] 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**ListFinancialEventGroupsResponse**](ListFinancialEventGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFinancialEvents"></a>
# **listFinancialEvents**
> ListFinancialEventsResponse listFinancialEvents(opts)



Returns financial events for the specified data range.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFinances from 'selling_partner_api_for_finances';

let apiInstance = new SellingPartnerApiForFinances.DefaultApi();
let opts = { 
  'maxResultsPerPage': 100, // Number | The maximum number of results to return per page.
  'postedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
  'postedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.listFinancialEvents(opts, (error, data, response) => {
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
 **maxResultsPerPage** | **Number**| The maximum number of results to return per page. | [optional] [default to 100]
 **postedAfter** | **Date**| A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format. | [optional] 
 **postedBefore** | **Date**| A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. | [optional] 
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**ListFinancialEventsResponse**](ListFinancialEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFinancialEventsByGroupId"></a>
# **listFinancialEventsByGroupId**
> ListFinancialEventsResponse listFinancialEventsByGroupId(eventGroupId, opts)



Returns all financial events for the specified financial event group.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFinances from 'selling_partner_api_for_finances';

let apiInstance = new SellingPartnerApiForFinances.DefaultApi();
let eventGroupId = "eventGroupId_example"; // String | The identifier of the financial event group to which the events belong.
let opts = { 
  'maxResultsPerPage': 100, // Number | The maximum number of results to return per page.
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.listFinancialEventsByGroupId(eventGroupId, opts, (error, data, response) => {
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
 **eventGroupId** | **String**| The identifier of the financial event group to which the events belong. | 
 **maxResultsPerPage** | **Number**| The maximum number of results to return per page. | [optional] [default to 100]
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**ListFinancialEventsResponse**](ListFinancialEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listFinancialEventsByOrderId"></a>
# **listFinancialEventsByOrderId**
> ListFinancialEventsResponse listFinancialEventsByOrderId(orderId, opts)



Returns all financial events for the specified order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFinances from 'selling_partner_api_for_finances';

let apiInstance = new SellingPartnerApiForFinances.DefaultApi();
let orderId = "orderId_example"; // String | An Amazon-defined order identifier, in 3-7-7 format.
let opts = { 
  'maxResultsPerPage': 100, // Number | The maximum number of results to return per page.
  'nextToken': "nextToken_example" // String | A string token returned in the response of your previous request.
};
apiInstance.listFinancialEventsByOrderId(orderId, opts, (error, data, response) => {
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
 **orderId** | **String**| An Amazon-defined order identifier, in 3-7-7 format. | 
 **maxResultsPerPage** | **Number**| The maximum number of results to return per page. | [optional] [default to 100]
 **nextToken** | **String**| A string token returned in the response of your previous request. | [optional] 

### Return type

[**ListFinancialEventsResponse**](ListFinancialEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

