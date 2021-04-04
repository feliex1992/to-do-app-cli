const ControllerBase = require('./ControllerBase');

const todosStore = require('../store/todos');

class EditToDoOpenTagsController extends ControllerBase {
  async simpan(toDo) {
    const {
      _id,
      tags
    } = toDo;

    const arrTags = tags.split(',').map(tag => tag.trim().toLowerCase());
    await todosStore.editItem(_id, { tags: arrTags });

    return this.resSuccess('success');
  }
}

module.exports = new EditToDoOpenTagsController;