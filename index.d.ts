declare module 'country-and-province' {
  class Countries {
    static byName(name: string): Country
    static byCode(code: string): Country
  }

  class Provinces {
    constructor(countryCode: string)

    data: Province[]
    countryCode: string

    byName(name: string): Province
    byCode(code: string): Province

    static data: Province[]

    static byName(name: string): Province
    static byCode(code: string): Province
    static byCountryCode(countryCode: string): Province[]
  }

  class Country {
    constructor(nameOrCode: string)

    code: string
    name: string
    provinces: Provinces
    alt?: []

    provinceByName(name: string): Province
    provinceByCode(code: string): Province
  }

  class Province {
    constructor(nameOrCode: string)

    code: string
    name: string
    countryCode: string
    country: Country
    alt?: string[]
    region?: string
  }

  export = { Countries, Provinces, Country, Province }
}
