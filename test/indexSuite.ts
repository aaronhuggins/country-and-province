import { strictEqual } from 'assert'
import { Countries, Provinces, Country, Province } from '../index'

describe('Country and Province', () => {
  describe('Country', () => {
    it('should lookup country info', () => {
      const result1 = Countries.byName('United States') // Expected output: Country class with data for United States of America

      strictEqual(result1.code, 'US')
      strictEqual(result1 instanceof Country, true)
  
      const result2 = Countries.byCode('CA') // Expected output: Country class with data for Canada
  
      strictEqual(result2.name, 'Canada')
    })

    it('should construct country class instance', () => {
      const country = new Country('US')
      const result = new Country('Japan')

      strictEqual(result.code, 'JP')

      const prov1 = result.provinceByNameOrCode('愛知県')

      strictEqual(prov1 instanceof Province, true)

      const prov2 = country.provinceByName('Missouri')

      strictEqual(prov2.code, 'MO')

      const prov3 = country.provinceByCode('MN')

      strictEqual(prov3.name, 'Minnesota')

      const prov4 = country.provinceByNameOrCode('Washington DC')

      strictEqual(prov4.code, 'DC')

      const prov5 = country.provinceByNameOrCode('DC')

      strictEqual(prov5.name, 'District of Columbia')
    })
  })

  describe('Province', () => {
    it('should lookup province info', () => {
      const result1 = Provinces.byCode('QC') // Province class for Quebec, Canada

      strictEqual(result1.name, 'Quebec')
      strictEqual(result1 instanceof Province, true)

      const result2 = Provinces.byName('Newfoundland') // Province class for Newfoundland, Canada

      strictEqual(result2.countryCode, 'CA')

      const result3 = Provinces.byCountryCode('GB')

      strictEqual(Array.isArray(result3), true)
      strictEqual(result3[0] instanceof Province, true)
    })

    it('should construct province class instance', () => {
      const result = new Province('CA')

      strictEqual(result.name, 'California')
    })
  })
})
