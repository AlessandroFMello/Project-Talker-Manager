const tokenGenerator = require('../helpers/tokenGenerator');

module.exports = (_req, res) => {
  const token = tokenGenerator();

  if (token.length !== 16) {
    return res
      .status(400)
      .json({ message: 'O token não tem o tamanho ideal!' });
  }

  return res.status(200).json({ token });
};
