const express = require("express");

const { userRouter } = require("./routes/user.route");
const { areaRouter } = require("./routes/area.route");
const { regionRouter } = require("./routes/region.route");
const { zoneRouter } = require("./routes/zone.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our sample RCCG project",
  });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/area", areaRouter);
app.use("/api/v1/region", regionRouter);
app.use("/api/v1/zone", zoneRouter);

app.listen(8111, () => {
  // connect to mongodb database
  const mongoose = require("mongoose");
  try {
    mongoose.connect("mongodb://localhost:27017/rccg", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected...");
  } catch (error) {
    console.log("Database is not connected...");
  }
  console.log("Server started at http://localhost:8111");
});

//   console.log("Server started at http://localhost:8111");
// });
