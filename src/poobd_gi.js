const {Pool} = require("pg");
async function CriarConexao() {
    const pool = new Pool({

        connectionString: 'postgres://bwjojmfgbshrym:2c4e59b535eb604a97de36e47127cfe4df0dd76821f316117c69c66ebae190d6@ec2-54-237-143-127.compute-1.amazop1vonaws.com:5432/dcoug4v',
        ssl: {
            rejectUnauthorized: false
        }
    }
);

   let con = await pool.connect();
    let P_tropicana = await con.query(`
    create table Pessoa(
        id serial primary key, 
        nome_completo varchar,
        endereco varchar
    )`
            
    );
   await con.query("insert into Pessoa (nome_completo, endereco) values ($1), ($2), ($3), ($4)",
   ["Maria da Silva", "Joana Costa", "Juliete Alves", "Carlos Martins"], 
   ["Rua Benedito Vitório ", "Rua João Mendes","Rua Camarão Ferreira", " Rua João e Maria"]);

   await con.query("update Pessoa set nome_completo = $1 where id = $2", ["Julia Barros", 3]);
   await con.query("update Pessoa set endereco = $1 where id = $2", ["Rua São Sebastião", 1]);
   await con.query("delete from Pessoa where upper(nome_completo) like 'Julia Barros'");
   await con.query("delete from Pessoa where upper(endereco) like 'Rua Camarão Ferreira'");


   let res = await con.query("select * from Pessoa");

    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
console.log(P_tropicana);
con.release();
   }
   
CriarConexao();  
        