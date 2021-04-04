const { initUserStore, startApp } = require('./App');
const dotenv = require('dotenv');
dotenv.config();

async function start() {
  await initUserStore();
  startApp();
}

start()