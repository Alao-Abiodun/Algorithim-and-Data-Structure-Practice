const router = require("express").Router();

const regionCtrl = require("../controllers/region.controller");

router.post("/", regionCtrl.createRegion);
router.get("/regions", regionCtrl.fetchAllRegion);
router.get("/count", regionCtrl.countMembersMinisters);

module.exports.regionRouter = router;
