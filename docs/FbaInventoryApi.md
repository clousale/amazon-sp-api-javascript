# SellingPartnerApiForFbaInventory.FbaInventoryApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInventorySummaries**](FbaInventoryApi.md#getInventorySummaries) | **GET** /fba/inventory/v1/summaries | 

<a name="getInventorySummaries"></a>
# **getInventorySummaries**
> GetInventorySummariesResponse getInventorySummaries(granularityType, granularityId, marketplaceIds, opts)



Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 90 | 150 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaInventory from 'selling_partner_api_for_fba_inventory';

let apiInstance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
let granularityType = "granularityType_example"; // String | The granularity type for the inventory aggregation level.
let granularityId = "granularityId_example"; // String | The granularity ID for the inventory aggregation level.
let marketplaceIds = ["marketplaceIds_example"]; // [String] | The marketplace ID for the marketplace for which to return inventory summaries.
let opts = { 
  'details': false, // Boolean | true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
  'startDateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
  'sellerSkus': ["sellerSkus_example"], // [String] | A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
  'nextToken': "nextToken_example" // String | String token returned in the response of your previous request.
};
apiInstance.getInventorySummaries(granularityType, granularityId, marketplaceIds, opts, (error, data, response) => {
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
 **granularityType** | **String**| The granularity type for the inventory aggregation level. | 
 **granularityId** | **String**| The granularity ID for the inventory aggregation level. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace ID for the marketplace for which to return inventory summaries. | 
 **details** | **Boolean**| true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value). | [optional] [default to false]
 **startDateTime** | **Date**| A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected. | [optional] 
 **sellerSkus** | [**[String]**](String.md)| A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs. | [optional] 
 **nextToken** | **String**| String token returned in the response of your previous request. | [optional] 

### Return type

[**GetInventorySummariesResponse**](GetInventorySummariesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

