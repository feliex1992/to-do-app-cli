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
      result = await Routes.main();
    } else {
      await Routes.login();
      result = await Routes.main();
    }

    if (result !== 'logout' && result !== '') startApp()
    if (result === 'logout') {
      startApp();
    } else if(result === ''){
      console.log(`Bye.`);
      process.exit(1);
    }
  } catch(err) {
    console.log('Something filed: ', err.message);
  }
};

module.exports.startApp = startApp;
module.exports.initUserStore = initUserStore;