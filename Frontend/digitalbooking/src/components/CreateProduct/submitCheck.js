export default function submitCheck(values) {
  
    if (values.productName.trim() && values.productDescription.trim() && values.city.name.trim() && values.coordinates[0].trim() && values.coordinates[1].trim() && values.productCategory.name.trim() && values.houseRules.trim() && values.healthSafety.trim() && values.cancellationPolicy.trim() && values.pricePerNight!= 0 && values.productAddress.trim()){
         return true;
    } else{
       return false
    };
}
  