"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomGenerator {
    constructor(spec) {
        var _a, _b, _c;
        this.a = BigInt(13);
        this.b = BigInt(7);
        this.c = BigInt(17);
        if (spec.seed < BigInt(0)) {
            throw new Error('negative seed value is not acceptable.');
        }
        this.seed = spec.seed;
        this.limit = spec.limit;
        this.a = (_a = spec.a, (_a !== null && _a !== void 0 ? _a : BigInt(13)));
        this.b = (_b = spec.b, (_b !== null && _b !== void 0 ? _b : BigInt(7)));
        this.c = (_c = spec.c, (_c !== null && _c !== void 0 ? _c : BigInt(17)));
        this.previous = this.limit ^ this.seed;
        const discard = spec.discards || RandomGenerator.defaultDiscards;
        for (let i = 0; i < discard; i++) {
            this.next();
        }
    }
    next() {
        return this.fetch(true);
    }
    look() {
        return this.fetch(false);
    }
    fetch(store) {
        let x = this.previous;
        x = (x ^ (x << this.a)) % this.limit;
        x = (x ^ (x >> this.b)) % this.limit;
        x = (x ^ (x << this.c)) % this.limit;
        if (store) {
            this.previous = x;
        }
        return x;
    }
}
exports.RandomGenerator = RandomGenerator;
RandomGenerator.defaultDiscards = 100;
