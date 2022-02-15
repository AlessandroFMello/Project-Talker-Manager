module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    const regexEmail = /\S+@\S+\.\S+/;
    const validatingEmail = regexEmail.test(email);
    if (!email || email === '') {
      return res
        .status(400)
        .json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validatingEmail) {
      return res
        .status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
