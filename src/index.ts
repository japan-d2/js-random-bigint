type RandomGeneratorSpec = {
  seed: bigint;
  limit: bigint;
  discards?: number;
  a?: bigint;
  b?: bigint;
  c?: bigint;
}

export class RandomGenerator {
  private previous: bigint
  public readonly seed: bigint
  public readonly limit: bigint
  public readonly a: bigint = BigInt(13)
  public readonly b: bigint = BigInt(7)
  public readonly c: bigint = BigInt(17)

  public static defaultDiscards = 100

  constructor (spec: RandomGeneratorSpec) {
    if (spec.seed < BigInt(0)) {
      throw new Error('negative seed value is not acceptable.')
    }
    this.seed = spec.seed
    this.limit = spec.limit

    this.a = spec.a ?? BigInt(13)
    this.b = spec.b ?? BigInt(7)
    this.c = spec.c ?? BigInt(17)

    this.previous = this.limit ^ this.seed
    const discard = spec.discards || RandomGenerator.defaultDiscards

    for (let i = 0; i < discard; i++) {
      this.next()
    }
  }

  next (): bigint {
    return this.fetch(true)
  }

  look (): bigint {
    return this.fetch(false)
  }

  private fetch (store: boolean): bigint {
    let x = this.previous
    x = (x ^ (x << this.a)) % this.limit
    x = (x ^ (x >> this.b)) % this.limit
    x = (x ^ (x << this.c)) % this.limit
    if (store) {
      this.previous = x
    }
    return x
  }
}
