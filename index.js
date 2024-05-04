const path = require("path");
const dotenv = require("dotenv").config();

const express = require("express");
const favicon = require("express-favicon");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(favicon(__dirname + "/public/img/favicon.png"));

// Arquivos estáticos
app.use("/static", express.static(__dirname + "/public"));

const hand = require("express-handlebars");
const handlebars = hand.create({
  defaultLayout: "main_log_true",
});

const routes = require("./src/routes/routes");

const cookieParser = require("cookie-parser");

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "/src/views"));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
