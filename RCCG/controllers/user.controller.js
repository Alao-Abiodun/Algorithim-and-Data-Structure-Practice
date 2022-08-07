const User = require("../models/user.model");
const Region = require("../models/region.model");
const Area = require("../models/area.model");
const Zone = require("../models/zone.model");

exports.createUser = async (req, res) => {
  try {
    // create a new user
    const { name, membership, area, region, zone } = req.body;
    const regionExist = await Region.findById(region);
    const areaExist = await Area.findById(area);
    const zoneExist = await Zone.findById(zone);
    if (!regionExist) {
      return res.status(400).json({ message: "Region does not exist" });
    }
    if (!areaExist) {
      return res.status(400).json({ message: "Area does not exist" });
    }
    if (!zoneExist) {
      return res.status(400).json({ message: "Zone does not exist" });
    }
    const user = new User({ name, membership, area, region, zone });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
};
