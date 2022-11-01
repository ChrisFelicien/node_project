const pageNotFound = (req, res) =>
  res.status(404).send("<h1>Oups this page was not found</h1>");

module.exports = pageNotFound;
