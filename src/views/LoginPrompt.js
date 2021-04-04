const qoa = require('qoa');
const loginController = require('../controllers/LoginController');

class LoginPrompt {
  prompt = async() => {
    await qoa.clearScreen();
    console.log("Login to To Do App CLI.");
    
    let email;

    const form = async () => {
      const emailText = {
        type: 'input',
        query: 'Email:',
        handle: 'email'
      }

      const input = await qoa.prompt([emailText]);
      const inputEmail = input.email.trim();

      if (inputEmail.length > 0) {
        email = inputEmail;
      } else {
        console.log("Email cannot be empty");
        await form();
      }

      const result = await loginController.login(email);
      if (result.statusCode !== 200) {
        console.log(result.message);
        await form();
      }
    }

    await form();
    return 'main';
  }
}

module.exports = LoginPrompt;