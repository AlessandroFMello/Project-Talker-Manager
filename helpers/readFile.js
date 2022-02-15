const fs = require('fs/promises');

module.exports = () => fs.readFile('./talker.json', 'utf-8')
  .then((fileData) => JSON.parse(fileData));
