"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCache = void 0;
const local_cache_1 = __importDefault(require("./local-cache"));
const checkCache = (req, res, next) => {
    try {
        const { baseUrl, method } = req;
        const [, , , cacheKey] = baseUrl.split('/');
        if (method === 'GET' && local_cache_1.default.haskey(cacheKey)) {
            const data = local_cache_1.default.get(cacheKey);
            return res.status(200).send(data);
        }
        next();
    }
    catch (error) {
        throw error;
    }
};
exports.checkCache = checkCache;
//# sourceMappingURL=check-cache.js.map