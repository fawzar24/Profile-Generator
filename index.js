const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");


getGithubInfo = async (username, colorPicked) => {
    let res = await axios.get("https://api.github.com/users/" + username);
    const data = res.data;
    console.log (data);
    await fs.writeFile("index.html", generateHTML.generateHTML(data, colorPicked), 
    
    function(err){
        if(err){
            return console.log(err);
        }
        else{
            console.log("done");
        }
    });
}

function getUserInput(){
    inquirer.prompt([
        {       
            type: "input",
            name: "username",
            message: "Please enter your Github username"
        },
        {
            type: "input",
            name: "color",
            message: "please enter your favorite color"
        }
    ]).then(answers => {
        const username = answers.username;
        const colorPicked = answers.color;
        getGithubInfo(username, colorPicked);
    });
        
}
getUserInput();

function generateHTML(data, color) {
    return`<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
          <title>Document</title>
          <body>
            <div class="main">
             <div class="wrapper">
              <div class="photo-header">
                <img src="">
                <h1>Hi!</h1>
                <h2>My name is Salah!</h2>
                <p>Currently @ Student at U of M bootCamp</p>
                <div class="links-nav">
                  <nav>
                    <a href="" class="nav-link"> Saint Paul, Minnesota </a>
                    <a href="https://github.com/${data.username}" class="nav-link">Github</a>
                    <a href="" class="nav-link">Blog</a>
                  </nav>
                </div>
              </div>
              <div class="container">
                <h3>Hello and welcome to my GitHub profile! Here you can find all the projects that I have worked on and am currently working on.</h3>
                <div class="row">
                  <div class="card col">
                    <h4>Public Repositories</h4>
                    <h5>11</h5>
                  </div>
                  <div class="card col">
                    <h4>Followers</h4>
                    <h5>${data.followers}</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="card col">
                    <h4>GitHub Stars</h4>
                    <h5>0</h5>
                  </div>
                  <div class="card col">
                    <h4>Following</h4>
                    <h5>1</h5>
                  </div>
                </div>
                
              </div>
             </div>
            </div>
          </body>`;
}