const Area = require("../models/area.model");

exports.createArea = async (req, res) => {
  try {
    const { province_title, area_type } = req.body;
    const area = new Area({ province_title, area_type });
    await area.save();
    res.status(201).json({ message: "Area created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating area" });
  }
};
