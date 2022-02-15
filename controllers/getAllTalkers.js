const readFile = require('../helpers/readFile');

module.exports = async (_req, res) => {
  const talkers = await readFile();
  if (talkers.length === 0) return res.status(200).json([]);

  return res.status(200).json(talkers);
};