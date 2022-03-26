"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const config_1 = __importDefault(require("../config"));
class Maestro extends sequelize_1.Model {
}
Maestro.init({
    idMaestro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Especialidad: {
        type: sequelize_1.DataTypes.STRING
    },
    Codigo: {
        type: sequelize_1.DataTypes.STRING
    },
    idPersonaRol: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idPersonaRol',
            model: _1.PersonaRol,
        }
    }
}, {
    sequelize: config_1.default,
    tableName: 'Maestro'
});
exports.default = Maestro;
//# sourceMappingURL=Maestro.js.map