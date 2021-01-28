[country-and-province](../README.md) / [Exports](../modules.md) / Countries

# Class: Countries

Static class for country lookups.

## Hierarchy

* **Countries**

## Table of contents

### Constructors

- [constructor](countries.md#constructor)

### Accessors

- [data](countries.md#data)

### Methods

- [byCode](countries.md#bycode)
- [byName](countries.md#byname)

## Constructors

### constructor

\+ **new Countries**(): [*Countries*](countries.md)

**Returns:** [*Countries*](countries.md)

## Accessors

### data

• `Static`**data**(): *Readonly*<{ `alt`: *string*[] ; `code`: *string* = "AD"; `name`: *string* = "Andorra" }\>[]

Immutable data member.

**Returns:** *Readonly*<{ `alt`: *string*[] ; `code`: *string* = "AD"; `name`: *string* = "Andorra" }\>[]

Defined in: [index.ts:39](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L39)

## Methods

### byCode

▸ `Static`**byCode**(`code`: *string*): [*Country*](country.md)

Lookup country data by country code.

#### Parameters:

Name | Type |
------ | ------ |
`code` | *string* |

**Returns:** [*Country*](country.md)

Defined in: [index.ts:51](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L51)

___

### byName

▸ `Static`**byName**(`name`: *string*): [*Country*](country.md)

Lookup country data by name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** [*Country*](country.md)

Defined in: [index.ts:44](https://github.com/ahuggins-nhs/country-and-province/blob/ccc287f/index.ts#L44)
