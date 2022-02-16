const readFile = require('../helpers/readFile');

module.exports = async (req, res) => {
  const { name } = req.query;

  const talkers = await readFile();

  if (!name || name === '') {
    return res.status(200).json(talkers);
  }
  
  const filteredNames = talkers.filter((talker) => talker.name.includes(name));

  if (!filteredNames) {
    return res.status(200).json([]);
  }

  return res.status(200).json(filteredNames);
};
