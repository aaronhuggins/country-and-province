import * as countries from 'country-list/data.json'
import * as countryAlts from './country-alts.json'
import * as provinces from 'provinces/provinces.json'

// Map additional data and conform data to standard format, forcing immutability.
const countryData = countries.map((val) => {
  return Object.freeze({
    alt: Object.freeze(countryAlts[val.code]) as string[],
    ...val
  })
})
const provinceData = provinces.map((val) => {
  return Object.freeze({
    name: val.name,
    code: val.short,
    countryCode: val.country,
    alt: Object.freeze(val.alt),
    region: val.region
  })
})

Object.freeze(countryData)
Object.freeze(provinceData)

// Helper functions
/** Compare two words to each other exactly. */
function compareExact(word1: string, word2: string) {
  return typeof word1 !== 'undefined' && typeof word2 !== 'undefined' && word1.toLowerCase() === word2.toLowerCase()
}
/** Search for a worf within an array of words. */
function alternateNameSearch (word: string, words: readonly string[]) {
  return typeof word !== 'undefined' && Array.isArray(words) && typeof words.find((val) => compareExact(val, word)) !== 'undefined'
}

// Classes
/** Static class for country lookups. */
export class Countries {
  /** Immutable data member. */
  static get data () {
    return countryData
  }

  /** Lookup country data by name. */
  static byName (name: string) {
    return new Country(Countries.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  /** Lookup country data by country code. */
  static byCode (code: string) {
    return new Country(Countries.data.find((val) => compareExact(code, val.code)))
  }
}

/** Class for looking up province data. */
export class Provinces {
  /** Create an instance of Provinces narrowed by country code. */
  constructor(countryCode: string) {
    this.data = Provinces.data.filter((val) => compareExact(countryCode, val.countryCode))
    this.countryCode = countryCode
  }

  private data: typeof provinceData
  /** The country code used to create this instance. */
  countryCode: string

  /** Lookup province by name. */
  byName (name: string): Province {
    return new Province(Provinces.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  /** Lookup province by province/state code. */
  byCode (code: string): Province {
    return new Province(this.data.find((val) => compareExact(code, val.code)))
  }

  /** Lookup province by name or by code. */
  byNameOrCode (nameOrCode: string): Province {
    return new Province(this.data.find((val) => {
      return compareExact(nameOrCode, val.name) || alternateNameSearch(nameOrCode, val.alt) || compareExact(nameOrCode, val.code)
    }))
  }

  /** Immutable data member. */
  static get data () {
    return provinceData
  }

  /** Lookup province by name; returns the first matching province in the case of overlap. */
  static byName (name: string): Province {
    return new Province(Provinces.data.find((val) => {
      return compareExact(name, val.name) || alternateNameSearch(name, val.alt)
    }))
  }

  /** Lookup province by code; returns the first matching province in the case of overlap. */
  static byCode (code) {
    return new Province(Provinces.data.find((val) => compareExact(code, val.code)))
  }

  /** Lookup an array of provinces by country code. */
  static byCountryCode (countryCode) {
    return Provinces.data
      .filter((val) => compareExact(countryCode, val.countryCode))
      .map((val) => new Province(val))
  }
}

/** Class for creating an instance describing Country data. */
export class Country {
  constructor (nameOrCode: string | Partial<Country>) {
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

  /** The name of this country. */
  name: string
  /** The code for this country. */
  code: string
  /** Alternate names for this country. */
  alt: readonly string[]
  /** Provinces related to this country. */
  provinces?: Provinces

  /** Lookup province by name. */
  provinceByName (name: string): Province {
    return this.provinces.byName(name)
  }

  /** Lookup province by province/state code. */
  provinceByCode (code: string): Province {
    return this.provinces.byCode(code)
  }

  /** Lookup province by name or by code. */
  provinceByNameOrCode (nameOrCode: string): Province {
    return this.provinces.byNameOrCode(nameOrCode)
  }
}

/** Class for creating an instance describing Province data. */
export class Province {
  constructor (nameOrCode: string | Partial<Province>) {
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

  /** Name of the province. */
  name: string
  /** The province code. */
  code: string
  /** Code of the country related to this province. */
  countryCode: string
  /** Alternate names for this province. */
  alt: readonly string[]
  /** The region of this province. */
  region?: string
  /** The instance of Country related to this province. */
  country?: Country
}
