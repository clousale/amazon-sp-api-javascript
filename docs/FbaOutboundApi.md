# SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFulfillmentOrder**](FbaOutboundApi.md#cancelFulfillmentOrder) | **PUT** /fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel | 
[**createFulfillmentOrder**](FbaOutboundApi.md#createFulfillmentOrder) | **POST** /fba/outbound/v0/fulfillmentOrders | 
[**createFulfillmentReturn**](FbaOutboundApi.md#createFulfillmentReturn) | **PUT** /fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId}/return | 
[**getFulfillmentOrder**](FbaOutboundApi.md#getFulfillmentOrder) | **GET** /fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId} | 
[**getFulfillmentPreview**](FbaOutboundApi.md#getFulfillmentPreview) | **POST** /fba/outbound/v0/fulfillmentOrders/preview | 
[**getPackageTrackingDetails**](FbaOutboundApi.md#getPackageTrackingDetails) | **GET** /fba/outbound/v0/tracking | 
[**listAllFulfillmentOrders**](FbaOutboundApi.md#listAllFulfillmentOrders) | **GET** /fba/outbound/v0/fulfillmentOrders | 
[**listReturnReasonCodes**](FbaOutboundApi.md#listReturnReasonCodes) | **GET** /fba/outbound/v0/returnReasonCodes | 
[**updateFulfillmentOrder**](FbaOutboundApi.md#updateFulfillmentOrder) | **PUT** /fba/outbound/v0/fulfillmentOrders/{sellerFulfillmentOrderId} | 

<a name="cancelFulfillmentOrder"></a>
# **cancelFulfillmentOrder**
> CancelFulfillmentOrderResponse cancelFulfillmentOrder(sellerFulfillmentOrderId)



Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.

apiInstance.cancelFulfillmentOrder(sellerFulfillmentOrderId, (error, data, response) => {
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
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**CancelFulfillmentOrderResponse**](CancelFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createFulfillmentOrder"></a>
# **createFulfillmentOrder**
> CreateFulfillmentOrderResponse createFulfillmentOrder(body)



Requests that Amazon ship items from the seller&#x27;s inventory in Amazon&#x27;s fulfillment network to a destination address.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApiForFulfillmentOutbound.CreateFulfillmentOrderRequest(); // CreateFulfillmentOrderRequest | 

apiInstance.createFulfillmentOrder(body, (error, data, response) => {
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
 **body** | [**CreateFulfillmentOrderRequest**](CreateFulfillmentOrderRequest.md)|  | 

### Return type

[**CreateFulfillmentOrderResponse**](CreateFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFulfillmentReturn"></a>
# **createFulfillmentReturn**
> CreateFulfillmentReturnResponse createFulfillmentReturn(bodysellerFulfillmentOrderId)



Creates a fulfillment return.   **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApiForFulfillmentOutbound.CreateFulfillmentReturnRequest(); // CreateFulfillmentReturnRequest | 
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct SellerFulfillmentOrderId value based on the buyer's request to return items.

apiInstance.createFulfillmentReturn(bodysellerFulfillmentOrderId, (error, data, response) => {
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
 **body** | [**CreateFulfillmentReturnRequest**](CreateFulfillmentReturnRequest.md)|  | 
 **sellerFulfillmentOrderId** | **String**| An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct SellerFulfillmentOrderId value based on the buyer&#x27;s request to return items. | 

### Return type

[**CreateFulfillmentReturnResponse**](CreateFulfillmentReturnResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFulfillmentOrder"></a>
# **getFulfillmentOrder**
> GetFulfillmentOrderResponse getFulfillmentOrder(sellerFulfillmentOrderId)



Returns the fulfillment order indicated by the specified order identifier.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.

apiInstance.getFulfillmentOrder(sellerFulfillmentOrderId, (error, data, response) => {
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
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**GetFulfillmentOrderResponse**](GetFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFulfillmentPreview"></a>
# **getFulfillmentPreview**
> GetFulfillmentPreviewResponse getFulfillmentPreview(body)



Returns a list of fulfillment order previews based on shipping criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApiForFulfillmentOutbound.GetFulfillmentPreviewRequest(); // GetFulfillmentPreviewRequest | 

apiInstance.getFulfillmentPreview(body, (error, data, response) => {
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
 **body** | [**GetFulfillmentPreviewRequest**](GetFulfillmentPreviewRequest.md)|  | 

### Return type

[**GetFulfillmentPreviewResponse**](GetFulfillmentPreviewResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPackageTrackingDetails"></a>
# **getPackageTrackingDetails**
> GetPackageTrackingDetailsResponse getPackageTrackingDetails(packageNumber)



Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let packageNumber = 56; // Number | The unencrypted package identifier returned by the getFulfillmentOrder operation.

apiInstance.getPackageTrackingDetails(packageNumber, (error, data, response) => {
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
 **packageNumber** | **Number**| The unencrypted package identifier returned by the getFulfillmentOrder operation. | 

### Return type

[**GetPackageTrackingDetailsResponse**](GetPackageTrackingDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAllFulfillmentOrders"></a>
# **listAllFulfillmentOrders**
> ListAllFulfillmentOrdersResponse listAllFulfillmentOrders(opts)



Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let opts = { 
  'queryStartDateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | A date and time used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
  'fulfillmentMethod': ["fulfillmentMethod_example"], // [String] | Indicates the intended recipient channel for the order.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request.
};
apiInstance.listAllFulfillmentOrders(opts, (error, data, response) => {
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
 **queryStartDateTime** | **Date**| A date and time used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order. | [optional] 
 **fulfillmentMethod** | [**[String]**](String.md)| Indicates the intended recipient channel for the order. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. | [optional] 

### Return type

[**ListAllFulfillmentOrdersResponse**](ListAllFulfillmentOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listReturnReasonCodes"></a>
# **listReturnReasonCodes**
> ListReturnReasonCodesResponse listReturnReasonCodes(sellerSKU, language, opts)



Returns a list of return reason codes for a seller SKU in a given marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let sellerSKU = "sellerSKU_example"; // String | The seller SKU for which return reason codes are required.
let language = "language_example"; // String | The language that the TranslatedDescription property of the ReasonCodeDetails response object should be translated into.
let opts = { 
  'marketplaceId': "marketplaceId_example", // String | The marketplace for which the seller wants return reason codes.
  'sellerFulfillmentOrderId': "sellerFulfillmentOrderId_example" // String | The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
};
apiInstance.listReturnReasonCodes(sellerSKU, language, opts, (error, data, response) => {
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
 **sellerSKU** | **String**| The seller SKU for which return reason codes are required. | 
 **language** | **String**| The language that the TranslatedDescription property of the ReasonCodeDetails response object should be translated into. | 
 **marketplaceId** | **String**| The marketplace for which the seller wants return reason codes. | [optional] 
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes. | [optional] 

### Return type

[**ListReturnReasonCodesResponse**](ListReturnReasonCodesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateFulfillmentOrder"></a>
# **updateFulfillmentOrder**
> UpdateFulfillmentOrderResponse updateFulfillmentOrder(bodysellerFulfillmentOrderId)



Updates and/or requests shipment for a fulfillment order with an order hold on it.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFulfillmentOutbound from 'selling_partner_api_for_fulfillment_outbound';

let apiInstance = new SellingPartnerApiForFulfillmentOutbound.FbaOutboundApi();
let body = new SellingPartnerApiForFulfillmentOutbound.UpdateFulfillmentOrderRequest(); // UpdateFulfillmentOrderRequest | 
let sellerFulfillmentOrderId = "sellerFulfillmentOrderId_example"; // String | The identifier assigned to the item by the seller when the fulfillment order was created.

apiInstance.updateFulfillmentOrder(bodysellerFulfillmentOrderId, (error, data, response) => {
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
 **body** | [**UpdateFulfillmentOrderRequest**](UpdateFulfillmentOrderRequest.md)|  | 
 **sellerFulfillmentOrderId** | **String**| The identifier assigned to the item by the seller when the fulfillment order was created. | 

### Return type

[**UpdateFulfillmentOrderResponse**](UpdateFulfillmentOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

