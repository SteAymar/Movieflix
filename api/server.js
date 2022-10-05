const express = require("express");
const app = express();
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const db = require ("./db")
const path = require("path");
const cors = require("cors");

require("../api/models")

app.use(cors());
app.use(express.json());
app.use(cookieParser())


app.use("/api", routes);

app.use(express.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3001;

db.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
});