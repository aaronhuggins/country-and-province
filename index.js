const countries = require('country-list/data.json')
const countryAlts = require('./country-alts.json')
const provinces = require('provinces/provinces.json')

// Map additional data and conform data to standard format
const countryData = countries.map((val) => {
  return Object.assign({ alt: countryAlts[val.code] }, val)
})
const provinceData = provinces.map((val) => {
  return {
    name: val.name,
    code: val.short,
    countryCode: val.country,
    alt: val.alt,
    region: val.region
  }
})

// Helper functions
const compareExact = function compareExact(word1, word2) {
  return word1 !== undefined && word2 !== undefined && word1.toLowerCase() === word2.toLowerCase()
}
const alternateNameSearch = function alternateNameSearch (word, words) {
  return word !== undefined && words !== undefined && words.find((val) => val.toLowerCase() === word.toLowerCase()) !== undefined
}

// Classes
class Countries {
  static get data () {
    return countryData
  }

  static byName (name) {
    return new Country(this.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  static byCode (code) {
    return new Country(this.data.find((val) => compareExact(code, val.code)))
  }
}

class Provinces {
  constructor(countryCode) {
    this.data = Provinces.data.filter((val) => compareExact(countryCode, val.countryCode))
    this.countryCode = countryCode
  }

  byName (name) {
    return new Province(this.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  byCode (code) {
    return new Province(this.data.find((val) => compareExact(code, val.code)))
  }

  byNameOrCode (nameOrCode) {
    return new Province(this.data.find((val) => {
      return compareExact(nameOrCode, val.name) || alternateNameSearch(nameOrCode, val.alt) || compareExact(nameOrCode, val.code)
    }))
  }

  static get data () {
    return provinceData
  }

  static byName (name) {
    return new Province(this.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  static byCode (code) {
    return new Province(this.data.find((val) => compareExact(code, val.code)))
  }

  static byCountryCode (countryCode) {
    return this.data
      .filter((val) => compareExact(countryCode, val.countryCode))
      .map((val) => new Province(val))
  }
}

class Country {
  constructor (nameOrCode) {
    this.name
    this.code
    this.alt

    if (typeof nameOrCode === 'string') {
      const result = Countries.data.find((val) => {
        return compareExact(nameOrCode, val.name) || alternateNameSearch(nameOrCode, val.alt) || compareExact(nameOrCode, val.code)
      })

      Object.assign(this, result)
    } else {
      Object.assign(this, nameOrCode)
    }

    if (this.code) {
      this.provinces = new Provinces(this.code)
    }
  }

  provinceByName (name) {
    return this.provinces.byName(name)
  }

  provinceByCode (code) {
    return this.provinces.byCode(code)
  }

  provinceByNameOrCode (nameOrCode) {
    return this.provinces.byNameOrCode(nameOrCode)
  }
}

class Province {
  constructor (nameOrCode) {
    this.name
    this.code
    this.countryCode
    this.alt
    this.region

    if (typeof nameOrCode === 'string') {
      const result = Provinces.data.find((val) => {
        return compareExact(nameOrCode, val.name) || alternateNameSearch(nameOrCode, val.alt) || compareExact(nameOrCode, val.code)
      })

      Object.assign(this, result)
    } else {
      Object.assign(this, nameOrCode)
    }

    if (this.countryCode) {
      this.country = Countries.byCode(this.countryCode)
    }
  }
}

module.exports = { Countries, Provinces, Country, Province }
