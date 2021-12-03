const { Console } = require('console');
const fs = require('fs')
const path = require("path");
let superheroe = path.join(__dirname,'../data/superheroes.json')
let superheroeparseado = JSON.parse(fs.readFileSync(superheroe, "utf-8"));


module.exports = {
  kids: (req, res) => {
    return res.render("kids");
  },
  quiz: (req, res) => {
    return res.render("quiz",{superheroeparseado});
  },
  
};
