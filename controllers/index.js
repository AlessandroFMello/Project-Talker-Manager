const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const postLogin = require('./postLogin');
const createTalker = require('./createTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');

module.exports = {
  getAllTalkers,
  getTalkerById,
  postLogin,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
};