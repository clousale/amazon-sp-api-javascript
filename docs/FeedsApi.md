# SellingPartnerApiForFeeds.FeedsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFeed**](FeedsApi.md#cancelFeed) | **DELETE** /feeds/2020-09-04/feeds/{feedId} | 
[**createFeed**](FeedsApi.md#createFeed) | **POST** /feeds/2020-09-04/feeds | 
[**createFeedDocument**](FeedsApi.md#createFeedDocument) | **POST** /feeds/2020-09-04/documents | 
[**getFeed**](FeedsApi.md#getFeed) | **GET** /feeds/2020-09-04/feeds/{feedId} | 
[**getFeedDocument**](FeedsApi.md#getFeedDocument) | **GET** /feeds/2020-09-04/documents/{feedDocumentId} | 
[**getFeeds**](FeedsApi.md#getFeeds) | **GET** /feeds/2020-09-04/feeds | 

<a name="cancelFeed"></a>
# **cancelFeed**
> CancelFeedResponse cancelFeed(feedId)



Cancels the feed that you specify. Only feeds with processingStatus&#x3D;IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let feedId = "feedId_example"; // String | The identifier for the feed. This identifier is unique only in combination with a seller ID.

apiInstance.cancelFeed(feedId, (error, data, response) => {
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
 **feedId** | **String**| The identifier for the feed. This identifier is unique only in combination with a seller ID. | 

### Return type

[**CancelFeedResponse**](CancelFeedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createFeed"></a>
# **createFeed**
> CreateFeedResponse createFeed(body)



Creates a feed. Encrypt and upload the contents of the feed document before calling this operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let body = new SellingPartnerApiForFeeds.CreateFeedSpecification(); // CreateFeedSpecification | 

apiInstance.createFeed(body, (error, data, response) => {
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
 **body** | [**CreateFeedSpecification**](CreateFeedSpecification.md)|  | 

### Return type

[**CreateFeedResponse**](CreateFeedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFeedDocument"></a>
# **createFeedDocument**
> CreateFeedDocumentResponse createFeedDocument(body)



Creates a feed document for the feed type that you specify. This operation returns encryption details for encrypting the contents of the document, as well as a presigned URL for uploading the encrypted feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let body = new SellingPartnerApiForFeeds.CreateFeedDocumentSpecification(); // CreateFeedDocumentSpecification | 

apiInstance.createFeedDocument(body, (error, data, response) => {
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
 **body** | [**CreateFeedDocumentSpecification**](CreateFeedDocumentSpecification.md)|  | 

### Return type

[**CreateFeedDocumentResponse**](CreateFeedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeed"></a>
# **getFeed**
> GetFeedResponse getFeed(feedId)



Returns feed details (including the resultDocumentId, if available) for the feed that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let feedId = "feedId_example"; // String | The identifier for the feed. This identifier is unique only in combination with a seller ID.

apiInstance.getFeed(feedId, (error, data, response) => {
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
 **feedId** | **String**| The identifier for the feed. This identifier is unique only in combination with a seller ID. | 

### Return type

[**GetFeedResponse**](GetFeedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFeedDocument"></a>
# **getFeedDocument**
> GetFeedDocumentResponse getFeedDocument(feedDocumentId)



Returns the information required for retrieving a feed document&#x27;s contents. This includes a presigned URL for the feed document as well as the information required to decrypt the document&#x27;s contents.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let feedDocumentId = "feedDocumentId_example"; // String | The identifier of the feed document.

apiInstance.getFeedDocument(feedDocumentId, (error, data, response) => {
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
 **feedDocumentId** | **String**| The identifier of the feed document. | 

### Return type

[**GetFeedDocumentResponse**](GetFeedDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFeeds"></a>
# **getFeeds**
> GetFeedsResponse getFeeds(opts)



Returns feed details for the feeds that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFeeds from 'selling_partner_api_for_feeds';

let apiInstance = new SellingPartnerApiForFeeds.FeedsApi();
let opts = { 
  'feedTypes': ["feedTypes_example"], // [String] | A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
  'marketplaceIds': ["marketplaceIds_example"], // [String] | A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
  'pageSize': 10, // Number | The maximum number of feeds to return in a single call.
  'processingStatuses': ["processingStatuses_example"], // [String] | A list of processing statuses used to filter feeds.
  'createdSince': new Date("2013-10-20T19:20:30+01:00"), // Date | The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
  'createdUntil': new Date("2013-10-20T19:20:30+01:00"), // Date | The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
  'nextToken': "nextToken_example" // String | A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
};
apiInstance.getFeeds(opts, (error, data, response) => {
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
 **feedTypes** | [**[String]**](String.md)| A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required. | [optional] 
 **marketplaceIds** | [**[String]**](String.md)| A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify. | [optional] 
 **pageSize** | **Number**| The maximum number of feeds to return in a single call. | [optional] [default to 10]
 **processingStatuses** | [**[String]**](String.md)| A list of processing statuses used to filter feeds. | [optional] 
 **createdSince** | **Date**| The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days. | [optional] 
 **createdUntil** | **Date**| The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now. | [optional] 
 **nextToken** | **String**| A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. | [optional] 

### Return type

[**GetFeedsResponse**](GetFeedsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

