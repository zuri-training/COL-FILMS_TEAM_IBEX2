const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { v4: uuid } = require("uuid");


// console.log(dotenv.config());
dotenv.config();

// console.log(process.env.MONGO_URL)
mongoose.set("strictQuery", false);
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json());

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);

var port = process.env.PORT|| 6100

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})