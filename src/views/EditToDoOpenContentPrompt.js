const qoa = require('qoa');
const EditToDoOpenContentController = require('../controllers/EditToDoOpenContentController');

const userStore = require('../store/user');

class EditToDoOpenContentPrompt {
  prompt = async(data) => {
    const { _id, content } = data;

    console.log(`Wellcome ${userStore.data.email}`)
    console.log('[Edit Open Task: Content] \n' + content)

    const form = async () => {
      const contentText = {
        type: 'input',
        query: 'Content:',
        handle: 'content'
      }

      const inputContent = await qoa.prompt([contentText]);
      const valueContent = inputContent.content.trim();

      if (valueContent.length === 0) {
        console.log("Content task tidak boleh kosong!");
        await form();
      }

      const result = await EditToDoOpenContentController.simpan({ _id, content: valueContent });
      if (result.statusCode !== 200) {
        console.log(result.message);
        await form();
      }
    }

    await form();
    return 'toDoShowOpen';
  }
}

module.exports = EditToDoOpenContentPrompt;