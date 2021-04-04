const qoa = require('qoa');
const EditToDoDoneController = require('../controllers/EditToDoDoneController');

class EditToDoDonePrompt {
  prompt = async(data) => {
    const result = await EditToDoDoneController.edit(data);
    return result;
  }
}

module.exports = EditToDoDonePrompt;
