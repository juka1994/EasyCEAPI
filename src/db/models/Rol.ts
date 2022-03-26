import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface RolAttributes{
    idRol: number,
    Nombre: string
}

export interface RolInput extends Optional<RolAttributes, 'idRol'>{}

export interface RolOutput extends Required<RolAttributes>{}

class Rol extends Model<RolAttributes, RolInput> implements RolAttributes{
    idRol!: number;
    Nombre!: string;
} 

Rol.init({
    idRol:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING
    }
},{
    tableName: 'Rol',
    sequelize: sequelizeConnection,
    timestamps: false
})

export default Rol