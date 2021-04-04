const qoa = require('qoa');
const EditToDoOpenDeleteController = require('../controllers/EditToDoOpenDeleteController');

class EditToDoOpenDeletePrompt {
  prompt = async(data) => {
    const result = await EditToDoOpenDeleteController.simpan(data);
    return 'toDoShowOpen';
  }
}

module.exports = EditToDoOpenDeletePrompt;