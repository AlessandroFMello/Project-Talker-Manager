module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    const regexDate = /^\d{2}[./]\d{2}[./]\d{4}$/;
    const validatingDate = regexDate.test(talk.watchedAt);
    if (!talk.watchedAt || talk.watchedAt === '') {
      return res.status(400)
        .json({
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }
    if (!validatingDate) {
      return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};