const createHtml = (employees) => {
    let cards = "";
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].getRole() === "Manager") {
        cards = cards + generateManager(employees[i]);
      }
      if (employees[i].getRole() === "Engineer") {
        cards = cards + generateEngineer(employees[i]);
      }
      if (employees[i].getRole() === "Intern") {
        cards = cards + generateIntern(employees[i]);
      }
    }
    return generateBody(cards);
};

const generateEngineer = (engineer) => {
    return `  <div class="col-sm-4">
    <div class="card m-5 bg-secondary bg-gradient" style="width: 18rem;">
       <div class="card-header text-white font-weight-bold">
         ${engineer.getRole()}
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Name: ${engineer.getName()}</li>
         <li class="list-group-item">ID: ${engineer.getId()}</li>
         <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
         <li class="list-group-item">Github: ${engineer.getGithub()}</li>
       </ul>
     </div>
     </div>`;
};
const generateIntern = (intern) => {
    return `  <div class="col-sm-4">
    <div class="card m-5 bg-secondary bg-gradient" style="width: 18rem;">
       <div class="card-header text-white font-weight-bold">
         ${intern.getRole()}
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Name: ${intern.getName()}</li>
         <li class="list-group-item">ID: ${intern.getId()}</li>
         <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
         <li class="list-group-item">School: ${intern.getSchool()}</li>
       </ul>
     </div>
     </div>`;
};

const generateManager = (manager) => {
    return `  <div class="col-sm-4">
    <div class="card m-5 bg-secondary bg-gradient" style="width: 18rem;">
       <div class="card-header text-white font-weight-bold">
         ${manager.getRole()}
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Name: ${manager.getName()}</li>
         <li class="list-group-item">ID: ${manager.getId()}</li>
         <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
         <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
       </ul>
     </div>
     </div>`;
};
  
const generateBody = (cards) => {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossorigin="anonymous"
        />
          <title>Team Profile Generator</title>
        </head>
        <body>
        <div class="p-2 mb-4 rounded-3 bg-primary text-white">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold text-center">My Team Members</h1>
        </div>
      </div>
          <div class="container">
            <div class="row team-container">
            ${cards}
            </div>
          </div>
        </body>
      </html>`;
};
  
module.exports = createHtml;