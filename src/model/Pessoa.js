let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");
const Pessoa = db.define("Pessoa",
{
    id_pessoa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        PrimaryKey: true
    },
    nome_completo :{
        type: DataTypes.STRING,
        allowNull : false
    },
    
    endereco : DataTypes.STRING,
    }
);

module.exports = Pessoa;