const qoa = require('qoa');
const ControllerBase = require('./ControllerBase');
const moment = require('moment');
const { getListMenu }  = require('./MenuController');

const userStore = require('../store/user') ;
const todosStore = require('../store/todos');

class ToDoShowDoneController extends ControllerBase {
  async list() {
    let listMenu = [];
    await qoa.clearScreen();
    console.log(`Wellcome ${userStore.data.email} [To Do App CLI]`);
    
    const showTodos = todosStore.data.filter((todo) => todo.statDone === true);
    listMenu = showTodos.map(t => ({_id: t._id, content: `[]: ${moment(t.createdAt).format('YYYY-MM-DD HH:mm:ss')} | ${t.content} | ${t.tags}`}));

    let menuItems = listMenu.map(t => t.content);
    menuItems.push(getListMenu().toDoList);
    menuItems.push("Logout");
    menuItems.push("Exit");

    const menu = {
      type: 'interactive',
      query: '[To Do Task Done] Choose operation:\n(select with up/down arrow keys, press Enter to choose)',
      handle: 'operation',
      symbol: '>',
      menu: menuItems
    }
  
    const chosen = await qoa.interactive(menu);
    let resChosen;

    switch (chosen.operation) {
      case getListMenu().toDoList:
        resChosen = 'toDoMenu';
        break
      case 'Logout':
        await todosStore.deinitialize();
        await userStore.deleteSingle();
        resChosen = 'logout';
        break;
      case 'Exit':
        resChosen = '';
        break;
      default:
        const idList = listMenu.find(t => t.content === chosen.operation);
        const resList = [ 'editDone', idList ];
        resChosen = resList;
    }
    return resChosen;
  }
}

module.exports = new ToDoShowDoneController;