const qoa = require('qoa');
const EditToDoOpenTagsController = require('../controllers/EditToDoOpenTagsController');

const userStore = require('../store/user');

class EditToDoOpenTagsPrompt {
  prompt = async(data) => {
    const { _id, content } = data;

    console.log(`Wellcome ${userStore.data.email}`)
    console.log('[Edit Open Task: Tags] \n' + content)

    const form = async () => {
      const tagsText = {
        type: 'input',
        query: 'Tags (Separate with commas):',
        handle: 'tags'
      }

      const inputTags = await qoa.prompt([tagsText]);
      let valueTags = inputTags.tags.trim();

      if (valueTags.length === 0) {
        valueTags = '';
      }

      const result = await EditToDoOpenTagsController.simpan({ _id, tags: valueTags });
      if (result.statusCode !== 200) {
        console.log(result.message);
        await form();
      }
    }

    await form();
    return 'toDoShowOpen';
  }
}

module.exports = EditToDoOpenTagsPrompt;