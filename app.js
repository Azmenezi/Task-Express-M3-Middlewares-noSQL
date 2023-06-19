const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const pathNotFound = require("./middleware/pathNotFound");
const { error } = require("console");
const errorHandler = require("./middleware/errorHandler");

connectDb();
app.use(express.json());

//routes
app.use("/posts", postsRoutes);

//middlewares
app.use("/media/", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));
app.use(pathNotFound);
app.use(errorHandler);

//listener
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
