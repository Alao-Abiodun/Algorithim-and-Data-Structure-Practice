const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema(
  {
    province_title: {
      type: String,
    },
    zone_type: {
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

module.exports = mongoose.model("Zone", zoneSchema);
