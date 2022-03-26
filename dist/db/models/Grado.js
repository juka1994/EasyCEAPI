"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Grado extends sequelize_1.Model {
}
Grado.init({
    idGrado: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: config_1.default,
    paranoid: true,
    tableName: 'Grado'
});
exports.default = Grado;
//# sourceMappingURL=Grado.js.map