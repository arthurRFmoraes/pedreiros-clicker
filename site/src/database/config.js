const mysql = require("mysql2");

const mySqlConfig = {
    host: "127.0.0.1",
    database: "portifolio",
    user: "localhostUser",
    password: "Localhost@user100"
}

function execute(instruction){
    return new Promise(function(resolve, reject){
        let conection = mysql.createConecction(mySqlConfig);
        conection.connect();
        conection.querry(instruction, function(error, results){
            conection.end();
            if(error){
                reject(error);
            }
            console.log(results);
            resolve(results);
        });
        conection.on('error', function (erro){
            return(`MySQL Workbench error: ${erro.sqlMessage}`);
        });
    });
}

module.exports = {
    execute
}