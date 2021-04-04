const qoa = require('qoa');
const EditToDoOpenController = require('../controllers/EditToDoOpenController');

class EditToDoOpenPrompt {
  prompt = async(data) => {
    const result = await EditToDoOpenController.edit(data);
    return result;
  }
}

module.exports = EditToDoOpenPrompt;