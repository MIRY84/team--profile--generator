const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


const teamMembers = [];// created an empty array
// function to generate manager questions
function addManager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the manager's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber"
    }
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    addTeamMember();
  });
}
// function to generate the Engineer prompts
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the engineer's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "github"
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    addTeamMember();
  });
}
// function to generate the intern with users prompts
function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is the intern's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school"
    }
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    addTeamMember();
  });
}

function addTeamMember() {
  inquirer.prompt([
    {
      type: "list",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
      name: "teamMemberChoice"
    }
  ]).then(answer => {
    switch (answer.teamMemberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        writeToFile();
        console.log("Team profile generated successfully!");
    }
  });
}
// function to generate the HTML
function writeToFile() {
  const renderedHtml = render(teamMembers);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, renderedHtml);
}
// FUNCTION TO INITIATE THE PROMPTS
addManager();





