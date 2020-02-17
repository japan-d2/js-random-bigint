declare type RandomGeneratorSpec = {
    seed: bigint;
    limit: bigint;
    discards?: number;
    a?: bigint;
    b?: bigint;
    c?: bigint;
};
export declare class RandomGenerator {
    private previous;
    readonly seed: bigint;
    readonly limit: bigint;
    readonly a: bigint;
    readonly b: bigint;
    readonly c: bigint;
    static defaultDiscards: number;
    constructor(spec: RandomGeneratorSpec);
    next(): bigint;
    look(): bigint;
    private fetch;
}
export {};
