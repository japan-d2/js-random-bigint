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
// => 5637762571260449273030132647656691852295390566410681230793181046n
random.next()
// => 4457241536950578442517528619126578343447503233842310925555103992n
random.next()
// => 9489098265339258643990268960842203575162730303587018422124828169n
random.next()
// => 5945162572438736028849931049929240611671488712663034771122619621n
```
# classes

## class RandomGenerator

#### new RandomGenerator (options: Options)

##### `Options`

###### `seed: bigint`

seed for random generator.

###### `limit: bigint`

limit of random values.

###### `discards: number`

discard first n values. (default = 100)

#### next (): bigint

returns random value and advance the state of the generator.

#### look (): bigint

look the next random number **without** changing the state of the generator

# license

MIT
