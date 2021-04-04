const ControllerBase = require('./ControllerBase');

const todosStore = require('../store/todos');
const userStore = require('../store/user');

class EditToDoOpenDeleteController extends ControllerBase {
  async simpan(toDo) {
    const {
      _id,
      content
    } = toDo;

    await todosStore.deleteItem(_id, userStore.data);

    return this.resSuccess('success');
  }
}

module.exports = new EditToDoOpenDeleteController;