[country-and-province](../README.md) / [Exports](../modules.md) / Provinces

# Class: Provinces

Class for looking up province data.

## Hierarchy

* **Provinces**

## Table of contents

### Constructors

- [constructor](provinces.md#constructor)

### Properties

- [countryCode](provinces.md#countrycode)
- [data](provinces.md#data)

### Accessors

- [data](provinces.md#data)

### Methods

- [byCode](provinces.md#bycode)
- [byName](provinces.md#byname)
- [byNameOrCode](provinces.md#bynameorcode)
- [byCode](provinces.md#bycode)
- [byCountryCode](provinces.md#bycountrycode)
- [byName](provinces.md#byname)

## Constructors

### constructor

\+ **new Provinces**(`countryCode`: *string*): [*Provinces*](provinces.md)

Create an instance of Provinces narrowed by country code.

#### Parameters:

Name | Type |
------ | ------ |
`countryCode` | *string* |

**Returns:** [*Provinces*](provinces.md)

Defined in: [index.ts:57](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L57)

## Properties

### countryCode

• **countryCode**: *string*

The country code used to create this instance.

Defined in: [index.ts:66](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L66)

___

### data

• `Private` **data**: *Readonly*<{ `alt`: readonly *string*[] ; `code`: *string* ; `countryCode`: *string* ; `name`: *string* ; `region`: *string*  }\>[]

Defined in: [index.ts:64](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L64)

## Accessors

### data

• `Static`**data**(): *Readonly*<{ `alt`: readonly *string*[] ; `code`: *string* ; `countryCode`: *string* ; `name`: *string* ; `region`: *string*  }\>[]

Immutable data member.

**Returns:** *Readonly*<{ `alt`: readonly *string*[] ; `code`: *string* ; `countryCode`: *string* ; `name`: *string* ; `region`: *string*  }\>[]

Defined in: [index.ts:88](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L88)

## Methods

### byCode

▸ **byCode**(`code`: *string*): [*Province*](province.md)

Lookup province by province/state code.

#### Parameters:

Name | Type |
------ | ------ |
`code` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:76](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L76)

___

### byName

▸ **byName**(`name`: *string*): [*Province*](province.md)

Lookup province by name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:69](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L69)

___

### byNameOrCode

▸ **byNameOrCode**(`nameOrCode`: *string*): [*Province*](province.md)

Lookup province by name or by code.

#### Parameters:

Name | Type |
------ | ------ |
`nameOrCode` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:81](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L81)

___

### byCode

▸ `Static`**byCode**(`code`: *any*): [*Province*](province.md)

Lookup province by code; returns the first matching province in the case of overlap.

#### Parameters:

Name | Type |
------ | ------ |
`code` | *any* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:100](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L100)

___

### byCountryCode

▸ `Static`**byCountryCode**(`countryCode`: *any*): [*Province*](province.md)[]

Lookup an array of provinces by country code.

#### Parameters:

Name | Type |
------ | ------ |
`countryCode` | *any* |

**Returns:** [*Province*](province.md)[]

Defined in: [index.ts:105](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L105)

___

### byName

▸ `Static`**byName**(`name`: *string*): [*Province*](province.md)

Lookup province by name; returns the first matching province in the case of overlap.

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:93](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L93)
