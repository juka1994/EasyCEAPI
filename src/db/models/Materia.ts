import { DataTypes, Model, Optional } from "sequelize"
import { Grado } from "."
import sequelizeConnection from "../config"

interface MateriaAttributes{
    idMateria: number;
    Nombre: string;
    Descripcion: string;
    Creditos: number;
    Horas:  number;
    Estado: boolean;
    idGrado: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MateriaInput extends Optional<MateriaAttributes, 'idMateria'>{}

export interface MateriaOutput extends Required<MateriaAttributes>{}

class Materia extends Model<MateriaAttributes, MateriaInput> implements MateriaAttributes{
    public idMateria!: number;
    public Nombre!: string;
    public Descripcion!: string;
    public Creditos!: number;
    public Horas!: number;
    public Estado!: boolean;
    public idGrado!: number;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Materia.init({
        idMateria: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre:{
            type: DataTypes.STRING
        },
        Descripcion:{
            type: DataTypes.STRING
        },
        Creditos:{
            type: DataTypes.INTEGER
        },
        Horas:{
            type: DataTypes.INTEGER
        },
        Estado:{
            type: DataTypes.BOOLEAN
        },
        idGrado:{
            type: DataTypes.INTEGER.UNSIGNED,
            references:{
                key: 'idGrado',
                model: Grado
            }
        }
},{
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'Materia'
})

export default Materia