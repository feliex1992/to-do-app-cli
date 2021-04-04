const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');

const userStore = require('../store/user');

const listMenus = {
  markDone: 'Mark Done',
  editContent: 'Edit Content',
  editTags: 'Edit Tags',
  deleteTask: 'Delete Task',
  mnuLogout: 'Logout',
  mnuExit: 'Exit'
};

class EditToDoOpenController extends ControllerBase {
  async edit(data) {
    // await qoa.clearScreen();

    const { _id, content } = data;
    console.log(`Wellcome ${userStore.data.email}`)
    
    let menuItems = [ listMenus.markDone ];
    menuItems.push(listMenus.editContent);
    menuItems.push(listMenus.editTags);
    menuItems.push(listMenus.deleteTask);
    menuItems.push(listMenus.mnuLogout);
    menuItems.push(listMenus.mnuExit);

    const menu = {
      type: 'interactive',
      query: '[Edit Open Task] Choose operation:\n(select with up/down arrow keys, press Enter to choose)\n' + content,
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }

    const chosen = await qoa.interactive(menu);
    let resChosen;
    switch (chosen.operation) {
      case listMenus.markDone:
        resChosen = ['editToDoOpenDone', { _id, content } ];
        break;
      case listMenus.editContent:
        resChosen = ['editToDoOpenContent', { _id, content } ];
        break;
      case listMenus.editTags:
        resChosen = ['editToDoOpenTags', { _id, content } ];
        break;
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

module.exports = new EditToDoOpenController();