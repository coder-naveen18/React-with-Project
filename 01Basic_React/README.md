# Description what i have learned here in the first React app

## How to start a project creation 
 
- We can go to the official documentation of [React by clicking here](https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework)

  or we can use the other Bundlers like [Vite](https://vite.dev/guide/) or [Parcel](https://parceljs.org/recipes/react/)


## Flow of React Files how to read them
- We start with the package.json file that contains the details of the complete React App like name, version, scripts(dev or start), build(for the production use means the file that we push when we deploy the project in production), dependencies(like React, React-dom) and devDependencies etc.

- src files where we work mostly when we develop the project. It contains the all the files that are responsible for the data or components that we see on the display of the browser. It includes the files like main.jsx(when we create it with vite npm bundler and can be changed) or index.jsx(when we create react app with the help of npx, which is bigger bundler and contains extra files or dependencies), App.jsx(with npm) or App.js(with npx) and many new components that we create and their CSS as well.

- index.html the file that renders on the browser and gather the components form the main.jsx and from the components there in src folder.

- node-module folder that contains the all the packages that are required or we may need when we are building an app.

- Asset folder that contains the logos and favicons that we want to use for the project. 

## Clearing or deleting the files 

- To the files or folders that we don't required or we want to create from the scratch 

## How to run React project

- If we are making the project with the help of npx(node package executor) than we can run the project with the command :

```command
npm run start
```
  and we can also change the start with anything that we want by visiting the package.json file and changing the script tag/ 
  property with anything that we want to use 

- If we are making the project with the help of vite npm(node package manager) than we can run the project with the command :

```command
npm run dev
```
  and we can also change the start with anything that we want by visiting the package.json file and changing the script tag/property with anything that we want to use 