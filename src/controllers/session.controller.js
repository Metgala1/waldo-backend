async function createSession(req, res) {
  return res.json({ status: "ok", message: "create session placeholder" });
}

async function clickCharacter(req, res) {
  return res.json({ status: "ok", message: "click placeholder" });
}

async function finishSession(req, res) {
  return res.json({ status: "ok", message: "finish placeholder" });
}

module.exports = {
  createSession,
  clickCharacter,
  finishSession,
};
