const express = require("express");
const bodyParser = require("body-parser");

var movies = [
  {
    title: "L'étrange noël de M. Jack",
    year: 1994,
    synopsys:
      "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.",
    real: "Henry Selick",
  },
  {
    title: "Interstellar",
    year: 2014,
    synopsys:
      "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver.",
    real: "Christopher Nolan",
  },
  {
    title: "La Haine",
    year: 1995,
    synopsys:
      "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
    real: "Mathieu Kassovitz",
  },
];

const app = express();
app.use(bodyParser.json()); //parse JSON body
app.use(bodyParser.urlencoded()); //parse x-www-form-urlencoded body
app.use("/static", express.static("folder/of/static/files"));

app.use((req, res, next) => {
  var now = new Date();
  var heure = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
  var minute = now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();
  var seconde =
    now.getSeconds() > 9 ? now.getSeconds() : "0" + now.getSeconds();
  console.log({
    heure: heure + ":" + minute + ":" + seconde,
    chemin: req.url,
    contenu: req.body,
  });
  next();
});

// app.use((req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
// });

app.get("/", (req, res) => res.sendfile("index.html"));
app.get("/foo/:var", (req, res) => res.send({ var: req.params.var }));
app.post("/add/:par1/:par2", (req, res) =>
  res.send("" + (parseInt(req.params.par1) + parseInt(req.params.par2)))
);

app.get("/api/movies/all", (req, res) => res.send(movies));
app.get("/api/movies/:id", (req, res) => res.send(movies[req.params.id]));
app.post("/api/movies", (req, res) => {
  movies.push({
    title: req.body.title ? req.body.title : "New Movie",
    year: req.body.year ? req.body.year : 0,
    synopsys: req.body.synopsys ? req.body.synopsys : "You must add a synopsis",
    real: req.body.real ? req.body.real : "Unknown",
  });
  res.send("Movie added !");
});
app.post("/api/movies/:id", (req, res) => {
  movies[req.params.id] = {
    title: req.body.title ? req.body.title : movies[req.params.id].title,
    year: req.body.year ? req.body.year : movies[req.params.id].year,
    synopsys: req.body.synopsys
      ? req.body.synopsys
      : movies[req.params.id].synopsys,
    real: req.body.real ? req.body.real : movies[req.params.id].real,
  };
  res.send("Movie modified !");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
