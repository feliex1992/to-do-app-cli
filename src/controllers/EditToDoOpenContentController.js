const ControllerBase = require('./ControllerBase');

const todosStore = require('../store/todos');

class EditToDoOpenContentController extends ControllerBase {
  async simpan(toDo) {
    const {
      _id,
      content
    } = toDo;

    await todosStore.editItem(_id, { content });

    return this.resSuccess('success');
  }
}

module.exports = new EditToDoOpenContentController;