"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Rol extends sequelize_1.Model {
}
Rol.init({
    idRol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'Rol',
    sequelize: config_1.default,
    timestamps: false
});
exports.default = Rol;
//# sourceMappingURL=Rol.js.map