const Region = require("../models/region.model");

exports.createRegion = async (req, res) => {
  try {
    // create a new region
    const { region_title, coverage } = req.body;
    const region = new Region({ region_title, coverage });
    await region.save();
    res.status(201).json({ message: "Region created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating region" });
  }
};

exports.fetchAllRegion = async (req, res) => {
  try {
    // fetch all region with number of Ministers and Members in each region.
    const regions = await Region.find({}).select([
      "Members",
      "Ministers",
      "region_title",
      "-_id",
    ]);
    // count document of regions
    const count = await Region.countDocuments();
    res.status(200).json({ count, regions });
  } catch (error) {
    res.status(500).json({ message: "Error fetching regions" });
  }
};

//count total numbers of Members and Ministers in all regions using aggregate
exports.countMembersMinisters = async (req, res) => {
  try {
    const count = await Region.aggregate([
      {
        $group: {
          _id: null,
          Members: { $sum: "$Members" },
          Ministers: { $sum: "$Ministers" },
        },
      },
    ]);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "Error fetching regions" });
  }
};
