# SellingPartnerApiForAuthorization.AuthorizationApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthorizationCode**](AuthorizationApi.md#getAuthorizationCode) | **GET** /authorization/v1/authorizationCode | Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.

<a name="getAuthorizationCode"></a>
# **getAuthorizationCode**
> GetAuthorizationCodeResponse getAuthorizationCode(sellingPartnerId, developerId, mwsAuthToken)

Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.

With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller&#x27;s behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForAuthorization from 'selling_partner_api_for_authorization';

let apiInstance = new SellingPartnerApiForAuthorization.AuthorizationApi();
let sellingPartnerId = "sellingPartnerId_example"; // String | The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore.
let developerId = "developerId_example"; // String | Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central.
let mwsAuthToken = "mwsAuthToken_example"; // String | The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore.

apiInstance.getAuthorizationCode(sellingPartnerId, developerId, mwsAuthToken, (error, data, response) => {
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
 **sellingPartnerId** | **String**| The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore. | 
 **developerId** | **String**| Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central. | 
 **mwsAuthToken** | **String**| The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore. | 

### Return type

[**GetAuthorizationCodeResponse**](GetAuthorizationCodeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, payload, errors

