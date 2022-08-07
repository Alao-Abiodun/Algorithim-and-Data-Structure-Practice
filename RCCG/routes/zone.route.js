const router = require("express").Router();

const zoneCtrl = require("../controllers/zone.controller");

router.post("/", zoneCtrl.createZone);

module.exports.zoneRouter = router;
