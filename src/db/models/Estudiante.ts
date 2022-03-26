import { DataTypes, Model, Optional } from "sequelize";
import  { PersonaRol }  from '.'
import sequelizeConnection from "../config";

interface EstudianteAttributes {
    idEstudiante: number;
    Codigo: string;
    idPersonaRol: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface EstudianteInput extends Optional<EstudianteAttributes, 'idEstudiante'>{}
export interface EstudianteOutput extends Required<EstudianteAttributes>{}

class Estudiante extends Model<EstudianteAttributes, EstudianteInput> implements EstudianteAttributes{
    public idEstudiante!: number;
    public Codigo!: string;
    public idPersonaRol!: number;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Estudiante.init({
    idEstudiante:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true
    },
    Codigo:{
        type: DataTypes.STRING
    },
    idPersonaRol:{
        type: DataTypes.INTEGER,
        references:{
            key: 'idPersonaRol',
            model: PersonaRol
        }
    }
},{
   sequelize: sequelizeConnection,
   tableName: 'Estudiante'
})

export default Estudiante