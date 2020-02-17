import { RandomGenerator } from '../src/index'

test('negative seed', () => {
  expect(() => {
    const random = new RandomGenerator({
      seed: BigInt(-10),
      limit: BigInt(10) ** BigInt(10)
    })
    random.next()
  }).toThrow(/negative seed/)
})

describe('random generator', () => {
  const generator = new RandomGenerator({
    seed: BigInt(10),
    limit: BigInt(10) ** BigInt(10)
  })

  test('returns bigint', () => {
    expect(typeof generator.next()).toBe('bigint')
  })

  test('returns value changes each time its called', () => {
    const a = generator.next()
    const b = generator.next()
    expect(a === b).toBeFalsy()
  })
})
