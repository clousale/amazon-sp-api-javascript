# SellingPartnerApiForNotifications.NotificationsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDestination**](NotificationsApi.md#createDestination) | **POST** /notifications/v1/destinations | 
[**createSubscription**](NotificationsApi.md#createSubscription) | **POST** /notifications/v1/subscriptions/{notificationType} | 
[**deleteDestination**](NotificationsApi.md#deleteDestination) | **DELETE** /notifications/v1/destinations/{destinationId} | 
[**deleteSubscriptionById**](NotificationsApi.md#deleteSubscriptionById) | **DELETE** /notifications/v1/subscriptions/{notificationType}/{subscriptionId} | 
[**getDestination**](NotificationsApi.md#getDestination) | **GET** /notifications/v1/destinations/{destinationId} | 
[**getDestinations**](NotificationsApi.md#getDestinations) | **GET** /notifications/v1/destinations | 
[**getSubscription**](NotificationsApi.md#getSubscription) | **GET** /notifications/v1/subscriptions/{notificationType} | 
[**getSubscriptionById**](NotificationsApi.md#getSubscriptionById) | **GET** /notifications/v1/subscriptions/{notificationType}/{subscriptionId} | 

<a name="createDestination"></a>
# **createDestination**
> CreateDestinationResponse createDestination(body)



Creates a destination resource to receive notifications. The createDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let body = new SellingPartnerApiForNotifications.CreateDestinationRequest(); // CreateDestinationRequest | 

apiInstance.createDestination(body, (error, data, response) => {
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
 **body** | [**CreateDestinationRequest**](CreateDestinationRequest.md)|  | 

### Return type

[**CreateDestinationResponse**](CreateDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Successful Response

<a name="createSubscription"></a>
# **createSubscription**
> CreateSubscriptionResponse createSubscription(bodynotificationType)



Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the createDestination operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let body = new SellingPartnerApiForNotifications.CreateSubscriptionRequest(); // CreateSubscriptionRequest | 
let notificationType = "notificationType_example"; // String | The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide.

apiInstance.createSubscription(bodynotificationType, (error, data, response) => {
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
 **body** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)|  | 
 **notificationType** | **String**| The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide. | 

### Return type

[**CreateSubscriptionResponse**](CreateSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, Successful Response

<a name="deleteDestination"></a>
# **deleteDestination**
> DeleteDestinationResponse deleteDestination(destinationId)



Deletes the destination that you specify. The deleteDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let destinationId = "destinationId_example"; // String | The identifier for the destination that you want to delete.

apiInstance.deleteDestination(destinationId, (error, data, response) => {
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
 **destinationId** | **String**| The identifier for the destination that you want to delete. | 

### Return type

[**DeleteDestinationResponse**](DeleteDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Response

<a name="deleteSubscriptionById"></a>
# **deleteSubscriptionById**
> DeleteSubscriptionByIdResponse deleteSubscriptionById(subscriptionId, notificationType)



Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The deleteSubscriptionById API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let subscriptionId = "subscriptionId_example"; // String | The identifier for the subscription that you want to delete.
let notificationType = "notificationType_example"; // String | The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide.

apiInstance.deleteSubscriptionById(subscriptionId, notificationType, (error, data, response) => {
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
 **subscriptionId** | **String**| The identifier for the subscription that you want to delete. | 
 **notificationType** | **String**| The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide. | 

### Return type

[**DeleteSubscriptionByIdResponse**](DeleteSubscriptionByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Operation Response

<a name="getDestination"></a>
# **getDestination**
> GetDestinationResponse getDestination(destinationId)



Returns information about the destination that you specify. The getDestination API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let destinationId = "destinationId_example"; // String | The identifier generated when you created the destination.

apiInstance.getDestination(destinationId, (error, data, response) => {
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
 **destinationId** | **String**| The identifier generated when you created the destination. | 

### Return type

[**GetDestinationResponse**](GetDestinationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Response

<a name="getDestinations"></a>
# **getDestinations**
> GetDestinationsResponse getDestinations()



Returns information about all destinations. The getDestinations API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
apiInstance.getDestinations((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetDestinationsResponse**](GetDestinationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Response

<a name="getSubscription"></a>
# **getSubscription**
> GetSubscriptionResponse getSubscription(notificationType)



Returns information about subscriptions of the specified notification type. You can use this API to get subscription information when you do not have a subscription identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let notificationType = "notificationType_example"; // String | The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide.

apiInstance.getSubscription(notificationType, (error, data, response) => {
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
 **notificationType** | **String**| The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide. | 

### Return type

[**GetSubscriptionResponse**](GetSubscriptionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Response

<a name="getSubscriptionById"></a>
# **getSubscriptionById**
> GetSubscriptionByIdResponse getSubscriptionById(subscriptionId, notificationType)



Returns information about a subscription for the specified notification type. The getSubscriptionById API is grantless. For more information, see \&quot;Grantless operations\&quot; in the Selling Partner API Developer Guide.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForNotifications from 'selling_partner_api_for_notifications';

let apiInstance = new SellingPartnerApiForNotifications.NotificationsApi();
let subscriptionId = "subscriptionId_example"; // String | The identifier for the subscription that you want to get.
let notificationType = "notificationType_example"; // String | The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide.

apiInstance.getSubscriptionById(subscriptionId, notificationType, (error, data, response) => {
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
 **subscriptionId** | **String**| The identifier for the subscription that you want to get. | 
 **notificationType** | **String**| The type of notification to which you want to subscribe.   For more information about notification types, see the Notifications API Use Case Guide. | 

### Return type

[**GetSubscriptionByIdResponse**](GetSubscriptionByIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, Successful Response

