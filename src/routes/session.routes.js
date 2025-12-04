const express = require("express");
const {
  createSession,
  clickCharacter,
  finishSession,
} = require("../controllers/session.controller");

const router = express.Router();

router.post("/", createSession);
router.post("/:sessionId/click", clickCharacter);
router.post("/:sessionId/finish", finishSession);

module.exports = router;
