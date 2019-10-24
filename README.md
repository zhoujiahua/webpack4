# webpack4

## 001
### 安装webpack打包环境
```
npm i webpack webpack-cli webpack-dev-server -g
mkdir project
git init .
npm init -y
```

### 无webpack.dev.js 文件打包方式
```
// 开发环境
webpack --mode=development 
// 生产环境
webpack --mode=production  
```
### 打包方式
**1）旧版本打包**
```
webpack app.js bundle.js
webpack main.js bundle.js
```

**2）webpack4 打包方式**
```
webpack --config=config/webpack.dev.js
```
### 启动方式
```
webpack-dev-server --config=config/webpack.dev.js
```

# 002
## 引入main.css

### loader 安装
```
npm install style-loader css-loader
```
### 配置package.json

**启动服务**
```
"start": "webpack-dev-server --config=config/webpack.dev.js",
```
**打包生成**
```
"build": "webpack --config=config/webpack.dev.js"
```

**旧版打包**
```
"start": "webpack-dev-server --config=config/webpack.dev.js",
"build": "webpack --config=config/webpack.dev.js"
```

**最新方式**
```
"start": "webpack-dev-server  --config config/webpack.config.js",
"build": "webpack --config config/webpack.config.js"
```

**启动方式**
```
npm run start
npm run build
```

# 003
## webpack4 加载html
**配置loader**
```
npm install html-loader extract-loader file-loader
webpack.dev.js
```
## webpack4 加载image

# 004
## babel ES6 转换
```
npm install babel-cli -g

npm install babel-core
npm isntall  babel-plugin-transform-es2015-arrow-functions
npm install bable-loader

npm install babel-core balel-loader babel-plugin-transform-es2015-arrow-functions
```
**根目录创建 .babelrc 配置项**
``` 
{
    "plugins": [
        "transform-es2015-arrow-functions"
    ]
} 
```

**编译文件命令**
```
babel src/file_name => (mian.js)
```

# 005
**polyfill / preset / transform**

```
npm install babel-plugin-async-to-promises
```
```
"plugins": [
    "transform-es2015-arrow-functions",
    "asyns-to-promises"
]
```

**环境标量配置**
```
npm install babel-preset-env
npm install babel-plugin-transform-runtime
```
