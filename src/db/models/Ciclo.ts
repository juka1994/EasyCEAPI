import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface CicloAttributes{
    idCiclo: number
    FechaInicio: Date
    FechaFinal: Date
}

export interface CicloInput extends Optional<CicloAttributes, 'idCiclo'>{}

export interface CicloOutput extends Required<CicloAttributes>{}

class Ciclo extends Model<CicloAttributes, CicloInput> implements CicloAttributes{
    public idCiclo!: number;
    public FechaInicio!: Date;
    public FechaFinal!: Date;
}

Ciclo.init({
    idCiclo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FechaInicio:{
        type: DataTypes.DATE,
    },
    FechaFinal:{
        type: DataTypes.DATE
    }
},{
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: 'Ciclo'
  }
)

export default Ciclo