const jokesDB = require("./jokes")

module.exports = (req, res) => {
  var joke = jokesDB.jokes[Math.floor(Math.random()*jokesDB.jokes.length)];
  res.end(joke)
}
