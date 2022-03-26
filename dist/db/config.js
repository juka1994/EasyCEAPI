"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const microdiff_1 = __importDefault(require("microdiff"));
const sequelize_1 = require("sequelize");
const local_cache_1 = __importDefault(require("../lib/local-cache"));
const isTest = process.env.NODE_ENV === 'test';
const dbName = isTest ? process.env.TEST_DB_NAME : process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const hooks = {
    afterUpdate: (instance) => {
        const cachekey = `${instance.constructor.name.toLowerCase()}s`;
        const currentData = instance.get({ plain: true });
        if (!local_cache_1.default.haskey(cachekey)) {
            return;
        }
        const listingData = local_cache_1.default.get(cachekey);
        const itemIndex = listingData.findIndex((it) => it.id === instance.getDataValue('id'));
        const oldItemData = ~itemIndex ? listingData[itemIndex] : {};
        const instanceDiff = (0, microdiff_1.default)(oldItemData, currentData);
        if (instanceDiff.length > 0) {
            listingData[itemIndex] = currentData;
            local_cache_1.default.set(cachekey, listingData);
        }
    },
    afterCreate: (instance) => {
        const cachekey = `${instance.constructor.name.toLowerCase()}s`;
        const currentData = instance.get({ plain: true });
        if (!local_cache_1.default.haskey(cachekey)) {
            return;
        }
        const listingData = local_cache_1.default.get(cachekey);
        listingData.push(currentData);
        local_cache_1.default.set(cachekey, listingData);
    }
};
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: false,
    define: { hooks },
    timezone: '-06:00'
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map