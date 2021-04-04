const qoa = require('qoa');
const menuController = require('../controllers/MenuController');

const userStore = require('../store/user');
const todosStore = require('../store/todos');

const Routes = require('../routes/Routes');

class MainPrompt {
  prompt = async() => {
    const listMenus = menuController.getListMenu();
    const operation = await menuController.menu(userStore.data);

    switch(operation.message) {
      case listMenus.toDoList:
        return "toDoMenu";
      case listMenus.mnuLogout:
        await todosStore.deinitialize();
        await userStore.deleteSingle();
        return 'logout';
      default:
        return '';
    }
  }
}

module.exports = MainPrompt;