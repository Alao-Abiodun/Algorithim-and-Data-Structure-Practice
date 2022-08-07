const Zone = require("../models/zone.model");

exports.createZone = async (req, res) => {
  try {
    // create a new region
    const { province_title, zone_type } = req.body;
    const zone = new Zone({ province_title, zone_type });
    await zone.save();
    res.status(201).json({ message: "Zone created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating zone" });
  }
};
