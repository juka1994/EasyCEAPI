"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class Persona extends sequelize_1.Model {
}
Persona.init({
    idPersona: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ApellidoPaterno: {
        type: sequelize_1.DataTypes.STRING
    },
    ApellidoMaterno: {
        type: sequelize_1.DataTypes.STRING
    },
    PrimerNombre: {
        type: sequelize_1.DataTypes.STRING
    },
    SegundoNombre: {
        type: sequelize_1.DataTypes.STRING
    },
    FechaNacimiento: {
        type: sequelize_1.DataTypes.DATE
    },
    Email: {
        type: sequelize_1.DataTypes.STRING
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    Curp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: config_1.default,
    tableName: 'Persona',
    paranoid: true
});
exports.default = Persona;
//# sourceMappingURL=Persona.js.map