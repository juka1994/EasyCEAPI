import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface GrupoAtributes{
    idGrupo: number;
    Nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
}

export interface GrupoInput extends Optional<GrupoAtributes, 'idGrupo'>{} 
export interface GrupoOutput  extends Required<GrupoAtributes>{}

class Grupo extends Model<GrupoAtributes, GrupoInput> implements GrupoOutput{
    public idGrupo!: number;
    public Nombre!: string;

    //timesptams
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deleteAt!: Date;
}

Grupo.init({
    idGrupo:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
       },
    Nombre:{
        type: DataTypes.STRING
       }
},{
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'Grupo'
})

export default Grupo