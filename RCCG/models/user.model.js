const mongoose = require("mongoose");
const Region = require("./region.model");
const Area = require("./area.model");
const Zone = require("./zone.model");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  membership: {
    type: String,
    enum: ["Members", "Ministers", "Workers"],
    default: "Members",
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  },
  zone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Zone",
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
  },
});

userSchema.post("save", async (res) => {
  console.log(res.zone);
  if (res.membership === "Members") {
    try {
      await Region.findByIdAndUpdate(res.region, { $inc: { Members: 1 } });
      await Zone.findByIdAndUpdate(res.zone, { $inc: { Members: 1 } });
      await Area.findByIdAndUpdate(res.area, { $inc: { Members: 1 } });
    } catch (error) {
      console.log(error);
    }
  } else if (res.membership === "Ministers") {
    try {
      await Region.findByIdAndUpdate(res.region, { $inc: { Ministers: 1 } });
      await Zone.findByIdAndUpdate(res.zone, { $inc: { Ministers: 1 } });
      await Area.findByIdAndUpdate(res.area, { $inc: { Ministers: 1 } });
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = mongoose.model("User", userSchema);
