const Routes = require('./routes/Routes');
const userStore = require('./store/user');
const todosStore = require('./store/todos');

let result = 'main';

async function initUserStore() {
  await userStore.initialize();
}

async function startApp() {
  try {
    if (userStore.data.email && !todosStore.isInitialized) {
      todosStore.setName(userStore.data.id);
      await todosStore.initialize();
    }
    
    if (userStore.data.email) {
      switch (result) {
        case 'toDoMenu':
          result = await Routes.toDoMenu();
          break;
        case 'toDoSync':
          result = await Routes.toDoSync();
          break;
        case 'toDoMenuCreate':
          result = await Routes.toDoCreate();
          break;
        case 'toDoShowOpen':
          result = await Routes.toDoShowOpen();
          break;
        case 'toDoShowDone':
          result = await Routes.toDoShowDone();
          break;
        case 'main':
          result = await Routes.main();
          break;
        default:
          if (result) {
            if (Array.isArray(result)) {
              switch (result[0]) {
                case 'editOpen':
                  result = await Routes.editToDoOpen(result[1]);
                  break;
                case 'editDone':
                  result = await Routes.editToDoDone(result[1]);
                  break;
                case 'editToDoOpenContent':
                  result = await Routes.editToDoOpenContent(result[1]);
                  break;
                case 'editToDoOpenTags':
                  result = await Routes.editToDoOpenTags(result[1]);
                  break;
                case 'editToDoOpenDone':
                  result = await Routes.editToDoOpenDone(result[1]);
                  break;
                case 'editToDoOpenDelete':
                  result = await Routes.editToDoOpenDelete(result[1]);
                  break;
              }
            }
          }
      } 
    } else {
      await Routes.login();
      result = await Routes.main();
    }

    if (result !== 'logout' && result !== '') startApp()
    if (result === 'logout') {
      startApp();
    } else if(result === ''){
      console.log(`Bye.`);
      process.exit();
    }
  } catch(err) {
    console.log('Something filed: ', err.message);
  }
};

module.exports.startApp = startApp;
module.exports.initUserStore = initUserStore;