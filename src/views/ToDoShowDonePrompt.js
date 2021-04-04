const qoa = require('qoa');
const toDoShowDoneController = require('../controllers/ToDoShowDoneController');

class ToDoShowDonePrompt {
  prompt = async() => {
    const result = await toDoShowDoneController.list();
    return result;
  }
}

module.exports = ToDoShowDonePrompt;