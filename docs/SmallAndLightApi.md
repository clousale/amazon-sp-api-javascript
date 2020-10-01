# SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSmallAndLightEnrollmentBySellerSKU**](SmallAndLightApi.md#deleteSmallAndLightEnrollmentBySellerSKU) | **DELETE** /fba/smallAndLight/v1/enrollments/{sellerSKU} | 
[**getSmallAndLightEligibilityBySellerSKU**](SmallAndLightApi.md#getSmallAndLightEligibilityBySellerSKU) | **GET** /fba/smallAndLight/v1/eligibilities/{sellerSKU} | 
[**getSmallAndLightEnrollmentBySellerSKU**](SmallAndLightApi.md#getSmallAndLightEnrollmentBySellerSKU) | **GET** /fba/smallAndLight/v1/enrollments/{sellerSKU} | 
[**getSmallAndLightFeePreview**](SmallAndLightApi.md#getSmallAndLightFeePreview) | **POST** /fba/smallAndLight/v1/feePreviews | 
[**putSmallAndLightEnrollmentBySellerSKU**](SmallAndLightApi.md#putSmallAndLightEnrollmentBySellerSKU) | **PUT** /fba/smallAndLight/v1/enrollments/{sellerSKU} | 

<a name="deleteSmallAndLightEnrollmentBySellerSKU"></a>
# **deleteSmallAndLightEnrollmentBySellerSKU**
> deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds)



Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaSmallAndLight from 'selling_partner_api_for_fba_small_and_light';

let apiInstance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
let sellerSKU = "sellerSKU_example"; // String | The seller SKU that identifies the item.
let marketplaceIds = ["marketplaceIds_example"]; // [String] | The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.

apiInstance.deleteSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellerSKU** | **String**| The seller SKU that identifies the item. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmallAndLightEligibilityBySellerSKU"></a>
# **getSmallAndLightEligibilityBySellerSKU**
> SmallAndLightEligibility getSmallAndLightEligibilityBySellerSKU(sellerSKU, marketplaceIds)



Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaSmallAndLight from 'selling_partner_api_for_fba_small_and_light';

let apiInstance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
let sellerSKU = "sellerSKU_example"; // String | The seller SKU that identifies the item.
let marketplaceIds = ["marketplaceIds_example"]; // [String] | The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.

apiInstance.getSmallAndLightEligibilityBySellerSKU(sellerSKU, marketplaceIds, (error, data, response) => {
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
 **sellerSKU** | **String**| The seller SKU that identifies the item. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only. | 

### Return type

[**SmallAndLightEligibility**](SmallAndLightEligibility.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmallAndLightEnrollmentBySellerSKU"></a>
# **getSmallAndLightEnrollmentBySellerSKU**
> SmallAndLightEnrollment getSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds)



Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaSmallAndLight from 'selling_partner_api_for_fba_small_and_light';

let apiInstance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
let sellerSKU = "sellerSKU_example"; // String | The seller SKU that identifies the item.
let marketplaceIds = ["marketplaceIds_example"]; // [String] | The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.

apiInstance.getSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, (error, data, response) => {
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
 **sellerSKU** | **String**| The seller SKU that identifies the item. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only. | 

### Return type

[**SmallAndLightEnrollment**](SmallAndLightEnrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmallAndLightFeePreview"></a>
# **getSmallAndLightFeePreview**
> SmallAndLightFeePreviews getSmallAndLightFeePreview(body)



Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaSmallAndLight from 'selling_partner_api_for_fba_small_and_light';

let apiInstance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
let body = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightFeePreviewRequest(); // SmallAndLightFeePreviewRequest | 

apiInstance.getSmallAndLightFeePreview(body, (error, data, response) => {
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
 **body** | [**SmallAndLightFeePreviewRequest**](SmallAndLightFeePreviewRequest.md)|  | 

### Return type

[**SmallAndLightFeePreviews**](SmallAndLightFeePreviews.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putSmallAndLightEnrollmentBySellerSKU"></a>
# **putSmallAndLightEnrollmentBySellerSKU**
> SmallAndLightEnrollment putSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds)



Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForFbaSmallAndLight from 'selling_partner_api_for_fba_small_and_light';

let apiInstance = new SellingPartnerApiForFbaSmallAndLight.SmallAndLightApi();
let sellerSKU = "sellerSKU_example"; // String | The seller SKU that identifies the item.
let marketplaceIds = ["marketplaceIds_example"]; // [String] | The marketplace in which to enroll the item. Note: Accepts a single marketplace only.

apiInstance.putSmallAndLightEnrollmentBySellerSKU(sellerSKU, marketplaceIds, (error, data, response) => {
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
 **sellerSKU** | **String**| The seller SKU that identifies the item. | 
 **marketplaceIds** | [**[String]**](String.md)| The marketplace in which to enroll the item. Note: Accepts a single marketplace only. | 

### Return type

[**SmallAndLightEnrollment**](SmallAndLightEnrollment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

