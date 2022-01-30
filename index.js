const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createHtml = require("./utils/createHtml");

function addEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
    }, {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email",
    }, {
        type: "input",
        message: "What is the Engineer's id?",
        name: "id",
    }, {
        type: "input",
        message: "What is the Engineer's Github?",
        name: "github",
    }]).then(function(data) {
        console.log(data)
        const engineer = new Engineer(data.name, data.email, data.id, data.github)
        console.log(engineer)
        employees.push(engineer)
        nextPrompt()
    })
}


