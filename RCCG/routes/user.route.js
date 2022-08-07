const router = require("express").Router();

const userCtrl = require("../controllers/user.controller");

router.post("/", userCtrl.createUser);
// router.get("/regions", userCtrl.getRegions);

module.exports.userRouter = router;
