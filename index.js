require ("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
//Rutas Principales
const mainRouter = require("./src/routes/main.routes");
app.use("/", mainRouter);
//Rutas Habitaciones
app.use("/habitaciones74", require("./src/routes/habitaciones74.route"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));