const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');

const userStore = require('../store/user');
const todosStore = require('../store/todos');

const listMenu = {
  toDoMenu: 'To Do Task',
  mnuLogout: 'Logout',
  mnuExit: 'Exit'
};

class ToDoSyncController extends ControllerBase {
  async sync() {
    await qoa.clearScreen();

    console.log(`Wellcome ${userStore.data.email} [To Do App CLI]`);
    console.log('Prepare for synchronize...');
    // const result = await todosStore.sync()
    // if (result) {
    //   console.log('Syncrhonize success.');
    // } else {
    //   console.log('Syncrhonize failed!');
    // }
    try {
      await todosStore.upload();
      console.log('upload done');
    } catch (err) {
      console.log('upload failed: ', err.message);
    }

    let menuItems = [ listMenu.toDoMenu ];
    menuItems.push(listMenu.mnuLogout);
    menuItems.push(listMenu.mnuExit);

    const menu = {
      type: 'interactive',
      query: '[Synch Data] Choose menu:\n(select with up/down arrow keys, press Enter to choose)',
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }
  
    const chosen = await qoa.interactive(menu);
    let chosenResult;

    switch (chosen.operation) {
      case 'To Do Task':
        chosenResult = 'toDoMenu';
        break;
      case 'Logout':
        chosenResult = 'logout';
        break;
      case 'Exit':
        chosenResult = '';
    }
    return this.resSuccess(chosenResult);
  }
}

module.exports = new ToDoSyncController;