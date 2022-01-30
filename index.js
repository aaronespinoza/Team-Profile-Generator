const inquirer = require("inquirer");
const fs = require("fs");
const employees = []
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createHtml = require("./src/createHtml");

function addEngineer() {
    inquirer.prompt([{
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
    }, {
        type: "input",
        message: "What is the Engineer's id?",
        name: "id",
    }, {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email",
    }, {
        type: "input",
        message: "What is the Engineer's Github?",
        name: "github",
    }]).then(function(data) {
        console.log(data)
        const engineer = new Engineer(data.name, data.email, data.id, data.github)
        console.log(engineer)
        employees.push(engineer)
        //calls next prompt function allowing user
        //to add more empoloyees or exit prompts
        nextPrompt()
    })
}

function addIntern() {
    inquirer.prompt([{
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
    }, {
        type: "input",
        message: "What is the Intern's id?",
        name: "id",
    }, {
        type: "input",
        message: "What is the Intern's email?",
        name: "email",
    }, {
        type: "input",
        message: "What school did the Intern go to?",
        name: "school",
    }]).then(function(data) {
        console.log(data)
        const intern = new Intern(data.name, data.email, data.id, data.school)
        console.log(intern)
        employees.push(intern)
        nextPrompt()
    })
}

function addManager() {
    inquirer.prompt([{
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
    },  {
        type: "input",
        message: "What is the Manager's id?",
        name: "id",
    },{
        type: "input",
        message: "What is the Manager's email?",
        name: "email",
    }, {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber",
    }]).then(function(data) {
        console.log(data)
        const manager = new Manager(data.name, data.email, data.id, data.officeNumber)
        console.log(manager)
        employees.push(manager)
        nextPrompt()
    })
}

function nextPrompt() {
    inquirer.prompt([{
        type: 'list',
        message: 'What do you want to add next?',
        name: 'option',
        choices: ['Engineer', 'Intern', 'Quit']
    }]).then(function(data) {
        if (data.option == "Engineer") {
            addEngineer()
        } else if (data.option == "Intern") {
            addIntern()
        } else if (data.option == "Quit") {
            quit()
        }
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function quit() {
    const html = createHtml(employees)
    writeToFile("./dist/index.html", html)
}
addManager()
