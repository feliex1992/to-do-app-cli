const LoginPrompt = require('../views/LoginPrompt');
const MainPrompt = require('../views/MainPrompt');

class Routes {
  constructor() {
    this.loginPrompt = new LoginPrompt();
    this.mainPrompt = new MainPrompt();
  }

  login = async() => {
    const result = await this.loginPrompt.prompt();
    return result;
  }

  main = async() => {
    const result = await this.mainPrompt.prompt();
    return result;
  }
}

module.exports = new Routes();