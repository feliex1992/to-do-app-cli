const ControllerBase = require('./ControllerBase');

const userStore = require('../store/user');
const todosStore = require('../store/todos');

class ToDoMenuController extends ControllerBase {
  async simpan(toDo) {
    const {
      content = '-',
      tags = []
    } = toDo;

    await todosStore.addItem({
      content,
      tags,
      statDone: false
    }, userStore.data);

    return 'success';
  }
}

module.exports = new ToDoMenuController;