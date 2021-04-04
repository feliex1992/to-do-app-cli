const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');
const listMenus = {
  toDoList: 'To Do Task',
  mnuLogout: 'Logout',
  mnuExit: 'Exit'
};

class MenuController extends ControllerBase {
  async menu(data) {
    await qoa.clearScreen();

    const { email } = data;
    console.log(`Wellcome ${email} [To Do App CLI]`)
    
    let menuItems = [ listMenus.toDoList ];
    menuItems.push(listMenus.mnuLogout);
    menuItems.push(listMenus.mnuExit);

    const menu = {
      type: 'interactive',
      query: '[Main Menu] Choose operation:\n(select with up/down arrow keys, press Enter to choose)',
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }
  
    const chosen = await qoa.interactive(menu);
    return this.resSuccess(chosen.operation);
  }

  getListMenu() {
    return listMenus;
  }
}

module.exports = new MenuController();