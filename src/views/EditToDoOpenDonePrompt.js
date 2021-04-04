const qoa = require('qoa');
const EditToDoOpenDoneController = require('../controllers/EditToDoOpenDoneController');

class EditToDoOpenDonePrompt {
  prompt = async(data) => {
    const result = await EditToDoOpenDoneController.simpan(data);
    return 'toDoShowOpen';
  }
}

module.exports = EditToDoOpenDonePrompt;