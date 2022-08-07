const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema(
  {
    region_title: {
      type: String,
    },
    coverage: {
      type: String,
    },
    Members: {
      type: Number,
      default: 0,
    },
    Ministers: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Region", regionSchema);
