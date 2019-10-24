const path = require("path");
module.exports = {
    // 入口：有并且可以有多个
    entry: {
        main: ["./src/main.js"]
    },
    // 打包环境： 开发 & 生产
    mode: "development",
    // 出口：有且只能有一个
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/", // 公开路径
    },
    // 本地服务器
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        // 加载项配置
        rules: [
            // js loader
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                // 排除无需转换的文件夹
                exclude: /node_modules/
            },
            // css loader
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            //html loader
            {
                test: /\.html$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            // image loader
            {
                test: /\.(jpg|gif|png)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        // name: "images/[name]-[hash:8].[ext]"
                        name: "images/[name].[ext]"
                    }
                }]
            }

        ]
    }
}