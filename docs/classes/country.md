[country-and-province](../README.md) / [Exports](../modules.md) / Country

# Class: Country

Class for creating an instance describing Country data.

## Hierarchy

* **Country**

## Table of contents

### Constructors

- [constructor](country.md#constructor)

### Properties

- [alt](country.md#alt)
- [code](country.md#code)
- [name](country.md#name)
- [provinces](country.md#provinces)

### Methods

- [provinceByCode](country.md#provincebycode)
- [provinceByName](country.md#provincebyname)
- [provinceByNameOrCode](country.md#provincebynameorcode)

## Constructors

### constructor

\+ **new Country**(`nameOrCode`: *string* \| *Partial*<[*Country*](country.md)\>): [*Country*](country.md)

#### Parameters:

Name | Type |
------ | ------ |
`nameOrCode` | *string* \| *Partial*<[*Country*](country.md)\> |

**Returns:** [*Country*](country.md)

Defined in: [index.ts:113](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L113)

## Properties

### alt

• **alt**: readonly *string*[]

Alternate names for this country.

Defined in: [index.ts:139](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L139)

___

### code

• **code**: *string*

The code for this country.

Defined in: [index.ts:137](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L137)

___

### name

• **name**: *string*

The name of this country.

Defined in: [index.ts:135](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L135)

___

### provinces

• `Optional` **provinces**: [*Provinces*](provinces.md)

Provinces related to this country.

Defined in: [index.ts:141](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L141)

## Methods

### provinceByCode

▸ **provinceByCode**(`code`: *string*): [*Province*](province.md)

Lookup province by province/state code.

#### Parameters:

Name | Type |
------ | ------ |
`code` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:149](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L149)

___

### provinceByName

▸ **provinceByName**(`name`: *string*): [*Province*](province.md)

Lookup province by name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:144](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L144)

___

### provinceByNameOrCode

▸ **provinceByNameOrCode**(`nameOrCode`: *string*): [*Province*](province.md)

Lookup province by name or by code.

#### Parameters:

Name | Type |
------ | ------ |
`nameOrCode` | *string* |

**Returns:** [*Province*](province.md)

Defined in: [index.ts:154](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L154)
