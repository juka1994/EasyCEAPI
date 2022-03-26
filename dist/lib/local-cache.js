"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
class LocalCache {
    constructor(ttlSeconds) {
        this.cache = new node_cache_1.default({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2,
        });
    }
    static getInstance() {
        if (!LocalCache._instance) {
            LocalCache._instance = new LocalCache(1000);
        }
        return LocalCache._instance;
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, data) {
        this.cache.set(key, data);
    }
    unset(key) {
        this.cache.del(key);
    }
    haskey(key) {
        return this.cache.has(key);
    }
}
exports.default = LocalCache.getInstance();
//# sourceMappingURL=local-cache.js.map