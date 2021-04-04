const LoginPrompt = require('../views/LoginPrompt');
const MainPrompt = require('../views/MainPrompt');
const ToDoMenuPrompt = require('../views/ToDoMenuPrompt');
const ToDoSyncPrompt = require('../views/ToDoSyncPrompt');
const ToDoCreatePrompt = require('../views/ToDoCreatePrompt');
const ToDoShowOpenPrompt = require('../views/ToDoShowOpenPrompt');
const ToDoShowDonePrompt = require('../views/ToDoShowDonePrompt');
const EditToDoOpenPrompt = require('../views/EditToDoOpenPrompt');
const EditToDoDonePrompt = require('../views/EditToDoDonePrompt');
const EditToDoOpenContentPrompt = require('../views/EditToDoOpenContentPrompt');
const EditToDoOpenTagsPrompt = require('../views/EditToDoOpenTagsPrompt');
const EditToDoOpenDonePrompt = require('../views/EditToDoOpenDonePrompt');
const EditToDoOpenDeletePrompt = require('../views/EditToDoOpenDeletePrompt');

class Routes {
  constructor() {
    this.loginPrompt = new LoginPrompt();
    this.mainPrompt = new MainPrompt();
    this.toDoMenuPromp = new ToDoMenuPrompt();
    this.toDoSyncPrompt = new ToDoSyncPrompt();
    this.toDoCreatePrompt = new ToDoCreatePrompt();
    this.toDoShowOpenPrompt = new ToDoShowOpenPrompt();
    this.editToDoOpenPrompt = new EditToDoOpenPrompt();
    this.editToDoDonePrompt = new EditToDoDonePrompt();
    this.editToDoOpenContentPrompt = new EditToDoOpenContentPrompt();
    this.editToDoOpenTagsPrompt = new EditToDoOpenTagsPrompt();
    this.editToDoOpenDonePrompt = new EditToDoOpenDonePrompt();
    this.editToDoOpenDeletePrompt = new EditToDoOpenDeletePrompt();
    this.toDoShowDonePrompt = new ToDoShowDonePrompt();
  }

  login = async() => {
    const result = await this.loginPrompt.prompt();
    return result;
  }

  main = async() => {
    const result = await this.mainPrompt.prompt();
    return result;
  }

  toDoMenu = async() => {
    const result = await this.toDoMenuPromp.prompt();
    return result;
  }

  toDoSync = async() => {
    const result = await this.toDoSyncPrompt.prompt();
    return result;
  }

  toDoCreate = async() => {
    const result = await this.toDoCreatePrompt.prompt();
    return result;
  }

  toDoShowOpen = async() => {
    const result = await this.toDoShowOpenPrompt.prompt();
    return result;
  }

  toDoShowDone = async() => {
    const result = await this.toDoShowDonePrompt.prompt();
    return result;
  }

  editToDoOpen = async(data) => {
    const result = await this.editToDoOpenPrompt.prompt(data);
    return result;
  }

  editToDoDone = async(data) => {
    const result = await this.editToDoDonePrompt.prompt(data);
    return result;
  }

  editToDoOpenContent = async(data) => {
    const result = await this.editToDoOpenContentPrompt.prompt(data);
    return result;
  }

  editToDoOpenTags = async(data) => {
    const result = await this.editToDoOpenTagsPrompt.prompt(data);
    return result;
  }

  editToDoOpenDone = async(data) => {
    const result = await this.editToDoOpenDonePrompt.prompt(data);
    return result;
  }

  editToDoOpenDelete = async(data) => {
    const result = await this.editToDoOpenDeletePrompt.prompt(data);
    return result;
  }
}

module.exports = new Routes();