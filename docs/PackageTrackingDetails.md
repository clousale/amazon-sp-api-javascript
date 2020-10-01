# SellingPartnerApiForFulfillmentOutbound.PackageTrackingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageNumber** | **Number** | The package identifier. | 
**trackingNumber** | **String** | The tracking number for the package. | [optional] 
**carrierCode** | **String** | The name of the carrier. | [optional] 
**carrierPhoneNumber** | **String** | The phone number of the carrier. | [optional] 
**carrierURL** | **String** | The URL of the carrier’s website. | [optional] 
**shipDate** | [**Timestamp**](Timestamp.md) |  | [optional] 
**estimatedArrivalDate** | [**Timestamp**](Timestamp.md) |  | [optional] 
**shipToAddress** | [**TrackingAddress**](TrackingAddress.md) |  | [optional] 
**currentStatus** | [**CurrentStatus**](CurrentStatus.md) |  | [optional] 
**signedForBy** | **String** | The name of the person who signed for the package. | [optional] 
**additionalLocationInfo** | [**AdditionalLocationInfo**](AdditionalLocationInfo.md) |  | [optional] 
**trackingEvents** | [**TrackingEventList**](TrackingEventList.md) |  | [optional] 
