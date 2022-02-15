const fs = require('fs/promises');
const readFile = require('../helpers/readFile');

module.exports = async (req, res) => {
  const talkers = await readFile();
  const { name, age, talk } = req.body;

  const newTalker = {
    id: (talkers.length + 1),
    name,
    age,
    talk,
  };
  
  talkers.push(newTalker);

  await fs.writeFile(
    './talker.json',
    JSON.stringify(talkers),
  );

  return res.status(201).json(newTalker);
};
