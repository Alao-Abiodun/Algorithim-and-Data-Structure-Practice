const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema(
  {
    province_title: {
      type: String,
    },
    area_type: {
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

module.exports = mongoose.model("Area", areaSchema);
