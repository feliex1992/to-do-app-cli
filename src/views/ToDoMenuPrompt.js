const qoa = require('qoa');
const toDoMenuController = require('../controllers/ToDoMenuController');

const userStore = require('../store/user');
const todosStore = require('../store/todos');

class ToDoMenuPrompt {
  prompt = async() => {
    const todoMenus = toDoMenuController.getListMenu();
    const operation = await toDoMenuController.menu(userStore.data);

    switch(operation.message) {
      case todoMenus.syncData:
        return 'toDoSync'
      case todoMenus.createNew:
        return 'toDoMenuCreate';
      case todoMenus.showOpen:
        return 'toDoShowOpen';
      case todoMenus.showDone:
        return 'toDoShowDone';
      case todoMenus.mnuLogout:
        await todosStore.deinitialize();
        await userStore.deleteSingle();
        return 'logout';
      case todoMenus.mnuExit:
        return '';
      default:
        await this.main()
    }
  }
}

module.exports = ToDoMenuPrompt;