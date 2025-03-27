




module.exports = (app, db) => {

app.get("/persona", async (req, res) => {
    const persona = db.persona.create({
      nombre: "Juan",
      apellido: "Perez",
      edad: 30,
    });
  
  
    res.render("pages/prueba.ejs",{persona})
  }
  )

}