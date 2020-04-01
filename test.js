const { Countries, Provinces, Country, Province } = require('./index.js')

console.log(Countries.byName('United States')) // Expected output: Country class with data for United States of America
console.log(new Country('CA')) // Expected output: Country class with data for Canada

console.log(Provinces.byCode('QC')) // Province class for Quebec, Canada
console.log(new Province('CA')) // Province class for California, United States
console.log(new Province('Newfoundland')) // Province class for California, United States

console.log(new Country('Spain').provinceByCode('CA')) // Province class for Cádiz, Spain
