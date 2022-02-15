const fs = require('fs/promises');
const readFile = require('../helpers/readFile');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();

  const talkerIndex = talkers
    .findIndex((talker) => talker.id === Number(id));

  talkers.splice(talkerIndex, 1);

  await fs.writeFile('./talker.json', JSON.stringify(talkers));

  return res.status(204).end();
};