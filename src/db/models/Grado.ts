import { DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from "../config";

interface GradoAtributes{
    idGrado: number;
    Nombre: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
}

export interface GradoInput extends Optional<GradoAtributes, 'idGrado'>{} 
export interface GradoOutput  extends Required<GradoAtributes>{}

class Grado extends Model<GradoAtributes, GradoInput> implements GradoOutput{
    public idGrado!: number;
    public Nombre!: string;

    //timesptams
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deleteAt!: Date;
}

Grado.init({
    idGrado:{
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
    tableName: 'Grado'
})

export default Grado