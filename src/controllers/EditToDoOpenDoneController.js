const ControllerBase = require('./ControllerBase');

const todosStore = require('../store/todos');

class EditToDoOpenDoneController extends ControllerBase {
  async simpan(toDo) {
    const {
      _id,
      content
    } = toDo;

    await todosStore.editItem(_id, { statDone: true });

    return this.resSuccess('success');
  }
}

module.exports = new EditToDoOpenDoneController;