"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _2 = require(".");
const config_1 = __importDefault(require("../config"));
class PersonaRol extends sequelize_1.Model {
}
PersonaRol.init({
    idPersonaRol: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idPersona: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idPersona',
            model: _1.Persona
        }
    },
    idRol: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            key: 'idRol',
            model: _2.Rol,
        }
    }
}, {
    sequelize: config_1.default,
    tableName: 'PersonaRol'
});
exports.default = PersonaRol;
//# sourceMappingURL=PersonaRol.js.map