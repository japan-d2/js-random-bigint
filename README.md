# random-bigint

A random number generator that generates random BigInt with the specified seed and maximum value using [Xorshift](https://en.wikipedia.org/wiki/Xorshift).

# install

```bash
npm install @japan-d2/random-bigint
```

or

```bash
yarn add @japan-d2/random-bigint
```

# example

```ts
import { RandomGenerator } from '@japan-d2/random-bigint'

const random = new RandomGenerator({
  seed: BigInt(123456789), // accepts any positive integer
  limit: BigInt(10) ** BigInt(64) // for example, 64 digits maximum
})

random.next()
// => 4464925289474199503950163339895478334221979290974435623537647567n
random.next()
// => 4127832323910091860185457515425145310309322365825342834490456368n
random.next()
// => 8689000534033763169626122465844744301729421064130559629373006402n
random.next()
// => 1959962671631000365957077183319993474502051004071024906005373702n
```
# classes

## class RandomGenerator

#### new RandomGenerator (options: Options)

##### `Options`

###### `seed: bigint`

seed for random generator.

###### `limit: bigint`

limit of random values.

#### next (): bigint

returns random value and advance the state of the generator.

#### look (): bigint

look the next random number **without** changing the state of the generator

# license

MIT
