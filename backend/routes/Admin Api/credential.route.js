const express = require("express");
const router = express.Router();
const { loginHandler, registerHandler, updateHandler, deleteHandler } = require("../../controllers/Admin/credential.controller.js");
const upload = require("../../middlewares/multer.middleware.js");

router.post("/login", loginHandler);

router.post("/register", upload.none(), registerHandler);

router.put("/update/:id", updateHandler);

router.delete("/delete/:id", deleteHandler);

module.exports = router;
