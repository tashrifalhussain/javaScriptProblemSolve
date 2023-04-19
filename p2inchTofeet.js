function milesToKm(miles){
    const km = miles*1.60934;
    return km;
}
const distanceMiles =2;
const distanceKm =milesToKm(distanceMiles);
console.log(distanceKm);