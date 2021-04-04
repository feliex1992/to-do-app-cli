const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');
const todoMenus = {
  syncData: 'Sync Data',
  createNew: 'Create New',
  showOpen: 'Open Task',
  showDone: 'Done Task',
  mnuLogout: 'Logout',
  mnuExit: 'Exit'
};


class ToDoMenuController extends ControllerBase {
  async menu(data) {
    await qoa.clearScreen();

    const { email } = data;
    console.log(`Wellcome ${email} [To Do App CLI]`)
    
    let menuItems = [ todoMenus.syncData ];
    menuItems.push(todoMenus.createNew);
    menuItems.push(todoMenus.showOpen);
    menuItems.push(todoMenus.showDone);
    menuItems.push(todoMenus.mnuLogout);
    menuItems.push(todoMenus.mnuExit);

    const menu = {
      type: 'interactive',
      query: '[To Do Task] Choose operation:\n(select with up/down arrow keys, press Enter to choose)',
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }
  
    const chosen = await qoa.interactive(menu);
    return this.resSuccess(chosen.operation);
  }

  getListMenu() {
    return todoMenus;
  }
}

module.exports = new ToDoMenuController;