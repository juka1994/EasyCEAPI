"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const config_1 = __importDefault(require("../config"));
class Materia extends sequelize_1.Model {
}
Materia.init({
    idMateria: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    Creditos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Horas: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idGrado: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        references: {
            key: 'idGrado',
            model: _1.Grado
        }
    }
}, {
    sequelize: config_1.default,
    paranoid: true,
    tableName: 'Materia'
});
exports.default = Materia;
//# sourceMappingURL=Materia.js.map