/* eslint-disable radix */
const readFile = require('../helpers/readFile');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await readFile();
  const talker = talkers.find((r) => r.id === parseInt(id));

  if (!talker) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
};