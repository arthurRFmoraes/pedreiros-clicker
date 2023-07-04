const userModel = require("../models/userModel");



let register = (req, res) => {
    let name = req.params.name;
    let email = req.params.email;
    let password = req.params.password;
    if(name == undefined){
    }else if(email == undefined){
    }else if(password == undefined){
    }else{

        userModel.register(name, email, password)
        .then(
            (result) => {
                res.json(result);
            }
        ).catch(
            (error) => {
                console.log(`${erro}\n${error.sqlMessage}`);
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}

let enter = (req, res) => {
    let email = req.params.email;
    let password = req.params.password;

    if(email == undefined){
    } else if (senha == undefined){
    }else{
        userModel.enter(email, password)
        .then(
            (result) =>{
                if (result.length == 1){
                    res.json(result[0]);
                }else{
                    res.status(403).send("erro")
                }
            }
        ).catch(
            (error) => {
                console.log(`${erro}\n${error.sqlMessage}`);
                res.status(500).json(error.sqlMessage);
            }
        );
    }
}

module.exports = {
    register,
    enter
}