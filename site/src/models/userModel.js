const database = require("../database/config");

let register = (name, email, password) =>{

    let instruction = `
    INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${password}');
    `;
    return database.execute(instruction);
}

let enter = (email, password) =>{
    let instruction = `
    SELECT * FROM user WHERE email = '${email}' AND password = '${password}';
    `;
    return database.execute(instruction);
}

module.exports = {
    register,
    enter
}