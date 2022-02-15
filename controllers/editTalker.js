const fs = require('fs/promises');
const readFile = require('../helpers/readFile');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkers = await readFile();

  const talkerIndex = talkers
    .findIndex((talker) => talker.id === Number(id));
  
  talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk };

  await fs.writeFile('./talker.json', JSON.stringify(talkers));

  return res.status(200).json(talkers[talkerIndex]);
};
