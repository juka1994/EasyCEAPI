"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Ciclo extends sequelize_1.Model {
}
Ciclo.init({
    idCiclo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FechaInicio: {
        type: sequelize_1.DataTypes.DATE,
    },
    FechaFinal: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    sequelize: config_1.default,
    timestamps: false,
    tableName: 'Ciclo'
});
exports.default = Ciclo;
//# sourceMappingURL=Ciclo.js.map