const qoa = require('qoa');
const ToDoCreateController = require('../controllers/ToDoCreateController');

const userStore = require('../store/user');

class ToDoCreatePrompt {
  prompt = async() => {
    await qoa.clearScreen();
    console.log(`Wellcome ${userStore.data.email} [To Do App CLI]`)
    console.log("Create new To Do Task.");

    let content;
    let tags;

    const form = async () => {
      const contentText = {
        type: 'input',
        query: 'Content:',
        handle: 'content'
      }

      const tagsText = {
        type: 'input',
        query: 'Tags:',
        handle: 'tags'
      }

      const valueContent = await qoa.prompt([contentText]);
      const inputContent = valueContent.content.trim();

      const valueTags = await qoa.prompt([tagsText]);
      const inputTags = valueTags.tags.split(',').map(t => t.trim().toLowerCase());

      if (inputContent.length > 0) {
        content = inputContent;
      } else {
        console.log("Content cannot be empty");
        await form();
      }

      tags = inputTags;
      const result = await ToDoCreateController.simpan({ content, tags});
      if (result !== 'success') {
        console.log('Create new To Do Task Failed!');
        await form();
      }
    }


    await form();
    return 'toDoMenu';
  }
}

module.exports = ToDoCreatePrompt;