const { initUserStore, startApp } = require('./App');

async function start() {
  await initUserStore();
  startApp();
}

start()