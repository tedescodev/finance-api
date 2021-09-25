let _versionService = null;

class HomeController {
  constructor({ VersionService }) {
    _versionService = VersionService;
  }

  index(req, res) {
    return res.send(_versionService.index());
  }
}

module.exports = HomeController;
