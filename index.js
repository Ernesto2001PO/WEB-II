const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;


const db = require("./models/");


// ejs
app.set("view engine", "ejs");





app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  "/js/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);
app.use(
  "/js/popper",
  express.static(__dirname + "/node_modules/@popperjs/dist")
);
app.use(
  "/css/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);

app.use("/css/bootstrap", express.static(__dirname + "node_modules/bootstrap/dist")

)

app.get("/", (req, res) => {
  const title = "Home";
  const message = "Welcome to the home page";

  res.render("pages/index", {
    title,
    message
  });
}
)

app.get("/prueba", (req, res) => {
  const persona = db.persona.create({
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
  });
  res.render("pages/prueba.ejs", {persona});
});

app.get("/personas", async (req, res) => {
  const personas = await db.persona.findAll();
  res.render("pages/list.ejs", {
    personas,
  });
})



app.listen(port, () => {
  console.log(`Example app listening in the porth ${port}`)
})



app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});


app.get("/infoget", (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  res.send(`First name: ${firstName} , Last name: ${lastName}`)
}
);


app.post("/infopost", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  res.send(`First name: ${firstName} , Last name: ${lastName}`)
}
);



