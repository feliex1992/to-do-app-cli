const qoa = require('qoa');
const toDoShowOpenController = require('../controllers/ToDoShowOpenController');

class ToDoShowOpenPrompt {
  prompt = async() => {
    const result = await toDoShowOpenController.list();
    return result;
  }
}

module.exports = ToDoShowOpenPrompt;