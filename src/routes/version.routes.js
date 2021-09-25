const { Router } = require("express");

module.exports = function({ VersionController }) {
  const router = Router();

  router.get("", VersionController.index);

  return router;
};
