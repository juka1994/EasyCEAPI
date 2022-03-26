import {Model, DataTypes, Optional}from "sequelize";
import sequelizeConnection from '../config';

interface PersonaAttributes{
    idPersona: number;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    PrimerNombre: string;
    SegundoNombre: string;
    FechaNacimiento: Date;
    Email: string;
    Telefono: string;
    Direccion: string;
    Curp: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface PersonaInput extends Optional<PersonaAttributes, 'idPersona'> {}

export interface PersonaOutput extends Required<PersonaAttributes>{}

class Persona extends Model<PersonaAttributes, PersonaInput> implements PersonaAttributes {
    public idPersona!: number
    public ApellidoPaterno!: string
    public ApellidoMaterno!: string
    public PrimerNombre!: string
    public SegundoNombre!: string
    public FechaNacimiento!: Date
    public Email!: string
    public Telefono!: string
    public Direccion!: string
    public Curp!: string

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Persona.init({
    idPersona:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ApellidoPaterno:{
        type: DataTypes.STRING
    },
    ApellidoMaterno: {
        type: DataTypes.STRING
    },
    PrimerNombre: {
        type: DataTypes.STRING
    },
    SegundoNombre:{
        type: DataTypes.STRING
    },
    FechaNacimiento:{
        type: DataTypes.DATE
    },
    Email:{
        type: DataTypes.STRING
    },
    Telefono: {
        type: DataTypes.STRING
    },
    Direccion:{
        type: DataTypes.STRING
    },
    Curp:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    tableName: 'Persona',
    paranoid: true
});
export default Persona;