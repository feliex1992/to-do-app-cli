const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');

const userStore = require('../store/user');

const listMenus = {
  deleteTask: 'Delete Task',
  mnuLogout: 'Logout',
  mnuExit: 'Exit'
};

class EditToDoDoneController extends ControllerBase {
  async edit(data) {
    // await qoa.clearScreen();

    const { _id, content } = data;
    console.log(`Wellcome ${userStore.data.email}`)
    
    let menuItems = [ listMenus.deleteTask ];
    menuItems.push(listMenus.mnuLogout);
    menuItems.push(listMenus.mnuExit);

    const menu = {
      type: 'interactive',
      query: '[Edit Done Task] Choose operation:\n(select with up/down arrow keys, press Enter to choose)\n' + content,
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }

    const chosen = await qoa.interactive(menu);
    let resChosen;
    switch (chosen.operation) {
      case listMenus.deleteTask:
          resChosen = ['editToDoOpenDelete', { _id, content } ];
          break;
      case listMenus.mnuLogout:
        await todosStore.deinitialize();
        await userStore.deleteSingle();
        resChosen = 'logout';
        break;
      case listMenus.mnuExit:
        resChosen = '';
    }

    return resChosen;
  }

  getListMenu() {
    return listMenus;
  }
}

module.exports = new EditToDoDoneController();