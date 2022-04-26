# MineSweeper App

![image](https://user-images.githubusercontent.com/94047181/165310373-42ffbeaf-1925-4ddd-abcc-7a444913b992.png)

You can choose the game difficulty level by clicking on "EASY", "MEDIUM" and "HARD" buttons.
If you want to open a field, just click on it!
Once you lose a game you won't be able to open new fields, so please click on the buttons again to restart it!

Technologies that are used here are: React, TypeScript.

State management: Redux + Redux-saga + Redux Toolkit.

![image](https://user-images.githubusercontent.com/94047181/164492356-80daa2dc-3e7c-42b7-b96c-9262f190ec66.png)


Redux saga event channel is used to communicate with websocket.
Two functions are forked in watchOnSocketEvents, one of them to send messages and other one to listen to incoming messages. (Picture above)


App is organised using feature-first approach.

App is deployed on a Netlify platform. Open https://mine-sweeper-app.netlify.app/ to view it.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
