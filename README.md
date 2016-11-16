# React-webpack-router-starter
> This is a simple react starter build for myself.

## File structure
```bash
├── LICENSE
├── package.json        //packages
├── postcss.config.js   //postcss config
├── README.md 
├── src                 //app root
│   ├── app.jsx         //app component
│   ├── assets          //all assets set here
│   │   └── logo.jpg
│   ├── components      //all small component in here
│   ├── index.jsx       //app wrapper component
│   ├── index.scss      //global style
│   ├── layout.jsx      //route layout
│   ├── pages           //all route page compnent here
│   │   ├── about.jsx
│   │   └── index.jsx
│   ├── router.jsx      //router config
│   └── template.html   //injected html
├── webpack.config.js
├── webpack.loaders.js
├── webpack.production.config.js
```

## Quick start

### Clone
```bash
git clone https://github.com/mxz96102/React-webpack-router-starter.git
```

### Install
> I use [yarn](https://github.com/yarnpkg/yarn) to arrange package

```bash
yarn install
```

### Dev
```bash
yarn start
```
start at http://localhost:8888/

### Build
```bash
yarn build
```
### Other
It's my honor if you can help he build this project better