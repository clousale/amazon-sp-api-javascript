# SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelShipment**](MerchantFulfillmentApi.md#cancelShipment) | **DELETE** /mfn/v0/shipments/{shipmentId} | 
[**cancelShipmentOld**](MerchantFulfillmentApi.md#cancelShipmentOld) | **PUT** /mfn/v0/shipments/{shipmentId}/cancel | 
[**createShipment**](MerchantFulfillmentApi.md#createShipment) | **POST** /mfn/v0/shipments | 
[**getAdditionalSellerInputs**](MerchantFulfillmentApi.md#getAdditionalSellerInputs) | **POST** /mfn/v0/additionalSellerInputs | 
[**getAdditionalSellerInputsOld**](MerchantFulfillmentApi.md#getAdditionalSellerInputsOld) | **POST** /mfn/v0/sellerInputs | 
[**getEligibleShipmentServices**](MerchantFulfillmentApi.md#getEligibleShipmentServices) | **POST** /mfn/v0/eligibleShippingServices | 
[**getEligibleShipmentServicesOld**](MerchantFulfillmentApi.md#getEligibleShipmentServicesOld) | **POST** /mfn/v0/eligibleServices | 
[**getShipment**](MerchantFulfillmentApi.md#getShipment) | **GET** /mfn/v0/shipments/{shipmentId} | 

<a name="cancelShipment"></a>
# **cancelShipment**
> CancelShipmentResponse cancelShipment(shipmentId)



Cancel the shipment indicated by the specified shipment identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let shipmentId = "shipmentId_example"; // String | The Amazon-defined shipment identifier for the shipment to cancel.

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
 **shipmentId** | **String**| The Amazon-defined shipment identifier for the shipment to cancel. | 

### Return type

[**CancelShipmentResponse**](CancelShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelShipmentOld"></a>
# **cancelShipmentOld**
> CancelShipmentResponse cancelShipmentOld(shipmentId)



Cancel the shipment indicated by the specified shipment identifer.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let shipmentId = "shipmentId_example"; // String | The Amazon-defined shipment identifier for the shipment to cancel.

apiInstance.cancelShipmentOld(shipmentId, (error, data, response) => {
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
 **shipmentId** | **String**| The Amazon-defined shipment identifier for the shipment to cancel. | 

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



Create a shipment with the information provided.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let body = new SellingPartnerApiForMerchantFulfillment.CreateShipmentRequest(); // CreateShipmentRequest | 

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

<a name="getAdditionalSellerInputs"></a>
# **getAdditionalSellerInputs**
> GetAdditionalSellerInputsResponse getAdditionalSellerInputs(body)



Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let body = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsRequest(); // GetAdditionalSellerInputsRequest | 

apiInstance.getAdditionalSellerInputs(body, (error, data, response) => {
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
 **body** | [**GetAdditionalSellerInputsRequest**](GetAdditionalSellerInputsRequest.md)|  | 

### Return type

[**GetAdditionalSellerInputsResponse**](GetAdditionalSellerInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAdditionalSellerInputsOld"></a>
# **getAdditionalSellerInputsOld**
> GetAdditionalSellerInputsResponse getAdditionalSellerInputsOld(body)



Get a list of additional seller inputs required for a ship method. This is generally used for international shipping.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let body = new SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsRequest(); // GetAdditionalSellerInputsRequest | 

apiInstance.getAdditionalSellerInputsOld(body, (error, data, response) => {
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
 **body** | [**GetAdditionalSellerInputsRequest**](GetAdditionalSellerInputsRequest.md)|  | 

### Return type

[**GetAdditionalSellerInputsResponse**](GetAdditionalSellerInputsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEligibleShipmentServices"></a>
# **getEligibleShipmentServices**
> GetEligibleShipmentServicesResponse getEligibleShipmentServices(body)



Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let body = new SellingPartnerApiForMerchantFulfillment.GetEligibleShipmentServicesRequest(); // GetEligibleShipmentServicesRequest | 

apiInstance.getEligibleShipmentServices(body, (error, data, response) => {
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
 **body** | [**GetEligibleShipmentServicesRequest**](GetEligibleShipmentServicesRequest.md)|  | 

### Return type

[**GetEligibleShipmentServicesResponse**](GetEligibleShipmentServicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEligibleShipmentServicesOld"></a>
# **getEligibleShipmentServicesOld**
> GetEligibleShipmentServicesResponse getEligibleShipmentServicesOld(body)



Returns a list of shipping service offers that satisfy the specified shipment request details.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let body = new SellingPartnerApiForMerchantFulfillment.GetEligibleShipmentServicesRequest(); // GetEligibleShipmentServicesRequest | 

apiInstance.getEligibleShipmentServicesOld(body, (error, data, response) => {
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
 **body** | [**GetEligibleShipmentServicesRequest**](GetEligibleShipmentServicesRequest.md)|  | 

### Return type

[**GetEligibleShipmentServicesResponse**](GetEligibleShipmentServicesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShipment"></a>
# **getShipment**
> GetShipmentResponse getShipment(shipmentId)



Returns the shipment information for an existing shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForMerchantFulfillment from 'selling_partner_api_for_merchant_fulfillment';

let apiInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
let shipmentId = "shipmentId_example"; // String | The Amazon-defined shipment identifier for the shipment.

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
 **shipmentId** | **String**| The Amazon-defined shipment identifier for the shipment. | 

### Return type

[**GetShipmentResponse**](GetShipmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

