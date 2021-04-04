const qoa = require('qoa');
const ToDoSyncController = require('../controllers/ToDoSyncController');

class ToDoSyncPrompt {
  prompt = async() => {
    const result = await ToDoSyncController.sync();
    return result;
  }
}

module.exports = ToDoSyncPrompt;