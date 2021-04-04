const ControllerBase = require("./ControllerBase");
const userStore = require('../store/user');

class LoginController extends ControllerBase {
  async login(data = "-") {
    const email = data;
    
    if (!email.endsWith('@gmail.com')) {
      return this.resError({
        statusCode: 400,
        message: 'Use @gmail.com to connect.'
      });
    }

    let id = email;
    id = id.split('@').shift().replace(/\W/g, '');

    await userStore.editSingle({
      id,
      email
    });

    return this.resSuccess('Login Success.');
  }
}

module.exports = new LoginController();