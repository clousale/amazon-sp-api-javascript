# SellingPartnerApiForPricing.ProductPricingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompetitivePricing**](ProductPricingApi.md#getCompetitivePricing) | **GET** /products/pricing/v0/competitivePrice | 
[**getItemOffers**](ProductPricingApi.md#getItemOffers) | **GET** /products/pricing/v0/items/{Asin}/offers | 
[**getListingOffers**](ProductPricingApi.md#getListingOffers) | **GET** /products/pricing/v0/listings/{SellerSKU}/offers | 
[**getPricing**](ProductPricingApi.md#getPricing) | **GET** /products/pricing/v0/price | 

<a name="getCompetitivePricing"></a>
# **getCompetitivePricing**
> GetPricingResponse getCompetitivePricing(marketplaceId, itemType, opts)



Returns competitive pricing information for a seller&#x27;s offer listings based on seller SKU or ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemType = "itemType_example"; // String | Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku.
let opts = { 
  'asins': ["asins_example"], // [String] | A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
  'skus': ["skus_example"] // [String] | A list of up to twenty seller SKU values used to identify items in the given marketplace.
};
apiInstance.getCompetitivePricing(marketplaceId, itemType, opts, (error, data, response) => {
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
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemType** | **String**| Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku. | 
 **asins** | [**[String]**](String.md)| A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace. | [optional] 
 **skus** | [**[String]**](String.md)| A list of up to twenty seller SKU values used to identify items in the given marketplace. | [optional] 

### Return type

[**GetPricingResponse**](GetPricingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItemOffers"></a>
# **getItemOffers**
> GetOffersResponse getItemOffers(marketplaceId, itemCondition, asin)



Returns the lowest priced offers for a single item based on ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemCondition = "itemCondition_example"; // String | Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.

apiInstance.getItemOffers(marketplaceId, itemCondition, asin, (error, data, response) => {
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
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemCondition** | **String**| Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | 
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | 

### Return type

[**GetOffersResponse**](GetOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getListingOffers"></a>
# **getListingOffers**
> GetOffersResponse getListingOffers(marketplaceId, itemCondition, sellerSKU)



Returns the lowest priced offers for a single SKU listing.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemCondition = "itemCondition_example"; // String | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
let sellerSKU = "sellerSKU_example"; // String | Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.

apiInstance.getListingOffers(marketplaceId, itemCondition, sellerSKU, (error, data, response) => {
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
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemCondition** | **String**| Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | 
 **sellerSKU** | **String**| Identifies an item in the given marketplace. SellerSKU is qualified by the seller&#x27;s SellerId, which is included with every operation that you submit. | 

### Return type

[**GetOffersResponse**](GetOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPricing"></a>
# **getPricing**
> GetPricingResponse getPricing(marketplaceId, itemType, opts)



Returns pricing information for a seller&#x27;s offer listings based on seller SKU or ASIN.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.

### Example
```javascript
import SellingPartnerApiForPricing from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();
let marketplaceId = "marketplaceId_example"; // String | A marketplace identifier. Specifies the marketplace for which prices are returned.
let itemType = "itemType_example"; // String | Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter.
let opts = { 
  'asins': ["asins_example"], // [String] | A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
  'skus': ["skus_example"], // [String] | A list of up to twenty seller SKU values used to identify items in the given marketplace.
  'itemCondition': "itemCondition_example" // String | Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
};
apiInstance.getPricing(marketplaceId, itemType, opts, (error, data, response) => {
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
 **marketplaceId** | **String**| A marketplace identifier. Specifies the marketplace for which prices are returned. | 
 **itemType** | **String**| Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. | 
 **asins** | [**[String]**](String.md)| A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace. | [optional] 
 **skus** | [**[String]**](String.md)| A list of up to twenty seller SKU values used to identify items in the given marketplace. | [optional] 
 **itemCondition** | **String**| Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. | [optional] 

### Return type

[**GetPricingResponse**](GetPricingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

