const menu = require("../data/menu.data");

const getMenu = (req, res) => {
  res.json(menu);
};

module.exports = { getMenu };