const router = require("express").Router();

const areaCtrl = require("../controllers/area.controller");

router.post("/", areaCtrl.createArea);

module.exports.areaRouter = router;
