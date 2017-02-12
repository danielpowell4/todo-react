#React Todo-App

Using [Create React App](https://github.com/facebookincubator/create-react-app) to get off the ground, this simple project showcases a React-driven todo application that creates, todos, filters, and destroys todo's.

It uses node's json-server to persist data inside of the db.json file found at the root.

##See it in action

1. Clone it down
2. Ensure you have json-server installed `npm i -g json-server`
3. Fire up your json-server `json-server -p 8080 --watch db.json`
4. Fire up the application `npm start`
5. Play with it in a browser at [localhost:3000]

##See tests pass
The helper functions in this application were built with TDD using Jest. Find the todoHelpers, utils, and tests in /src/lib

Run them from the command line with `npm test`

##Things worth a look
* The **magic** in App.js
* `partial` and `pipe` in src/lib/utils
* Router and link implementation (components in src/compoents/router)
* `json-server`-y things in src/lib/todoService
