# to-do-app-cli
This is to do app CLI built using Node.js with offline first capability provided by PouchDB via eFishery's pouchy-store.

## Installation

* Before start download and install Node JS, this app use Node JS version: ```v14.16.0```.
* Open a terminal and ```cd``` into the folder
* Install the dependencies using ```npm install``` command inside the root folder.
* Create ```.env``` file in the root directory to configure CouchDB connection. Take a look at provided ```.env.example``` file as a reference.

## Usage 

* To start the app run ```npm start``` command or ```node src/index.ja```.
* In login prompt insert email gmail.

## Feature

* To Do Task
  * Sync Data (for synchronize data with remote CouchDB)
  * Create New (Create new to do task)
  * Open Task (Show open task list)
    * Select task wich you want update or delete
      * Mark Done (Change status task to Done)
      * Edit Content (Edit value content)
      * Edit Tags (Edit value tags)
      * Delete Task (Delete task from list)
  * Done Task (Show done task list)