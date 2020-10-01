# SellingPartnerApiForShipping.ShippingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipment**](ShippingApi.md#cancelShipment) | **POST** /shipping/v1/shipments/{shipmentId}/cancel | 
[**createShipment**](ShippingApi.md#createShipment) | **POST** /shipping/v1/shipments | 
[**getAccount**](ShippingApi.md#getAccount) | **GET** /shipping/v1/account | 
[**getRates**](ShippingApi.md#getRates) | **POST** /shipping/v1/rates | 
[**getShipment**](ShippingApi.md#getShipment) | **GET** /shipping/v1/shipments/{shipmentId} | 
[**getTrackingInformation**](ShippingApi.md#getTrackingInformation) | **GET** /shipping/v1/tracking/{trackingId} | 
[**purchaseLabels**](ShippingApi.md#purchaseLabels) | **POST** /shipping/v1/shipments/{shipmentId}/purchaseLabels | 
[**purchaseShipment**](ShippingApi.md#purchaseShipment) | **POST** /shipping/v1/purchaseShipment | 
[**retrieveShippingLabel**](ShippingApi.md#retrieveShippingLabel) | **POST** /shipping/v1/shipments/{shipmentId}/containers/{trackingId}/label | 

<a name="cancelShipment"></a>
# **cancelShipment**
> CancelShipmentResponse cancelShipment(shipmentId)



Cancel a shipment by the given shipmentId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let shipmentId = "shipmentId_example"; // String | 

apiInstance.cancelShipment(shipmentId, (error, data, response) => {
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
 **shipmentId** | **String**|  | 

### Return type

[**CancelShipmentResponse**](CancelShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createShipment"></a>
# **createShipment**
> CreateShipmentResponse createShipment(body)



Create a new shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let body = new SellingPartnerApiForShipping.CreateShipmentRequest(); // CreateShipmentRequest | 

apiInstance.createShipment(body, (error, data, response) => {
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
 **body** | [**CreateShipmentRequest**](CreateShipmentRequest.md)|  | 

### Return type

[**CreateShipmentResponse**](CreateShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccount"></a>
# **getAccount**
> GetAccountResponse getAccount()



Verify if the current account is valid.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
apiInstance.getAccount((error, data, response) => {
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

[**GetAccountResponse**](GetAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRates"></a>
# **getRates**
> GetRatesResponse getRates(body)



Get service rates.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let body = new SellingPartnerApiForShipping.GetRatesRequest(); // GetRatesRequest | 

apiInstance.getRates(body, (error, data, response) => {
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
 **body** | [**GetRatesRequest**](GetRatesRequest.md)|  | 

### Return type

[**GetRatesResponse**](GetRatesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShipment"></a>
# **getShipment**
> GetShipmentResponse getShipment(shipmentId)



Return the entire shipment object for the shipmentId.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let shipmentId = "shipmentId_example"; // String | 

apiInstance.getShipment(shipmentId, (error, data, response) => {
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
 **shipmentId** | **String**|  | 

### Return type

[**GetShipmentResponse**](GetShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackingInformation"></a>
# **getTrackingInformation**
> GetTrackingInformationResponse getTrackingInformation(trackingId)



Return the tracking information of a shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let trackingId = "trackingId_example"; // String | 

apiInstance.getTrackingInformation(trackingId, (error, data, response) => {
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
 **trackingId** | **String**|  | 

### Return type

[**GetTrackingInformationResponse**](GetTrackingInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="purchaseLabels"></a>
# **purchaseLabels**
> PurchaseLabelsResponse purchaseLabels(bodyshipmentId)



Purchase shipping labels based on a given rate.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let body = new SellingPartnerApiForShipping.PurchaseLabelsRequest(); // PurchaseLabelsRequest | 
let shipmentId = "shipmentId_example"; // String | 

apiInstance.purchaseLabels(bodyshipmentId, (error, data, response) => {
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
 **body** | [**PurchaseLabelsRequest**](PurchaseLabelsRequest.md)|  | 
 **shipmentId** | **String**|  | 

### Return type

[**PurchaseLabelsResponse**](PurchaseLabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purchaseShipment"></a>
# **purchaseShipment**
> PurchaseShipmentResponse purchaseShipment(body)



Purchase shipping labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let body = new SellingPartnerApiForShipping.PurchaseShipmentRequest(); // PurchaseShipmentRequest | 

apiInstance.purchaseShipment(body, (error, data, response) => {
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
 **body** | [**PurchaseShipmentRequest**](PurchaseShipmentRequest.md)|  | 

### Return type

[**PurchaseShipmentResponse**](PurchaseShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveShippingLabel"></a>
# **retrieveShippingLabel**
> RetrieveShippingLabelResponse retrieveShippingLabel(bodyshipmentIdtrackingId)



Retrieve shipping label based on the shipment id and tracking id.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForShipping from 'selling_partner_api_for_shipping';

let apiInstance = new SellingPartnerApiForShipping.ShippingApi();
let body = new SellingPartnerApiForShipping.RetrieveShippingLabelRequest(); // RetrieveShippingLabelRequest | 
let shipmentId = "shipmentId_example"; // String | 
let trackingId = "trackingId_example"; // String | 

apiInstance.retrieveShippingLabel(bodyshipmentIdtrackingId, (error, data, response) => {
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
 **body** | [**RetrieveShippingLabelRequest**](RetrieveShippingLabelRequest.md)|  | 
 **shipmentId** | **String**|  | 
 **trackingId** | **String**|  | 

### Return type

[**RetrieveShippingLabelResponse**](RetrieveShippingLabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

