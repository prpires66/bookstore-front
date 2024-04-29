const path = require("path");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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
//app.set('views', './views');
app.set("views", path.join(__dirname, "/src/views"));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
