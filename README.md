## Cloning the project to your local machine.

1. Make sure your machine is having internet connection.
1. Open shell (which ever your OS support) on your PC.
1. Change drive to the location where you want your project to  be copied
1. Now type or copy-paste the below given commands.
```Bash
    git clone https://github.com/Ayush-Khandelwal-007/manufac.git
```
5. Press Enter and you will see some downloading statmets as shown below:
```Bash
    Cloning into 'manufac'...
    remote: Enumerating objects: 117, done.
    remote: Counting objects: 100% (117/117), done.
    remote: Compressing objects: 100% (80/80), done.
    remote: Total 117 (delta 38), reused 111 (delta 32), pack-reused 0
    Receiving objects: 100% (117/117), 275.48 KiB | 499.00 KiB/s, done.
    Resolving deltas: 100% (38/38), done.
```
----

## Dependencies

1. Browser compatibility

    | Browsers      | Their downloading link                                                                                                                |
    |---------------|---------------------------------------------------------------------------------------------------------------------------------------|
    | Firefox 3.5+  | [Download Link](https://www.mozilla.org/en-US/firefox/download/thanks/)                                                               |
    | Google Chrome | [Download Link](https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMIrang1ta76QIVln8rCh1wVw3cEAAYASAAEgImhvD_BwE&gclsrc=aw.ds) |
    | Opera 12+     | [Download Link](https://www.opera.com/download)                                                                                       |
    | Safari 6+     | [Download Link](https://support.apple.com/en-us/HT204416)                                                                             |


2. A text editor or preferably an IDE(Integrated development environment) to make things works more easier and comfortable. Like

    1. Visual Studio
    1. Xcode
    1. Atom
    1. Brackets

___
## Running the project locally.
1. Install Dependencies use *yarn* command, this will require internet connection as we need to install the dependencies for the project:
```Bash
    yarn
```

2. Build the project using *yarn build* command, this may take about a minute:
```Bash
    yarn build
```
3. Localy host the project using *yarn start* command, this will deploy the project locly to the local host, and to your wireless network if connected to one:

```Bash
    yarn start
```

```Bash
    Compiled successfully!

You can now view manufac in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.8:3000

Note that the development build is not optimized.
To create a production build, use yarn build.

```
After this the default browser will open automatically with the http://localhost:3000/   (port used may not be 3000 , it may vary if the post is already in use and will ask if you want to use another port)   as the initial page.

----
___
****

# INSTRUCTIONS TO START NEW APP
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
