import { DataTypes, Model, Optional } from "sequelize";
import  { PersonaRol }  from '.'
import sequelizeConnection from "../config";

interface MaestroAttributes {
    idMaestro: number;
    Especialidad: string;
    Codigo: string;
    idPersonaRol: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MaestroInput extends Optional<MaestroAttributes, 'idMaestro'>{}
export interface MaestroOutput extends Required<MaestroAttributes>{}

class Maestro extends Model<MaestroAttributes, MaestroInput> implements MaestroAttributes{
    public idMaestro!: number;
    public Especialidad!: string;
    public Codigo!: string;
    public idPersonaRol!: number;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Maestro.init({
    idMaestro:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    },
    Especialidad:{
        type: DataTypes.STRING
    },
    Codigo:{
        type: DataTypes.STRING
    },
    idPersonaRol:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idPersonaRol',
            model: PersonaRol,
        }
    }
},{
   sequelize: sequelizeConnection,
   tableName: 'Maestro'
});

export default Maestro