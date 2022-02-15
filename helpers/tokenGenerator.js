module.exports = () => {
  const optionsArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    .split('');
  const token = [];
  for (let i = 1; i <= 16; i += 1) {
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    const randomItem = optionsArray[randomIndex];
    token.push(randomItem);
  }
  const joinedToken = token.join('');

  return joinedToken;
};
