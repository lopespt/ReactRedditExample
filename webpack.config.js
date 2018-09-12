const path = require("path");

module.exports = {
    entry: "./index.js",
    mode: "development",
    output:{
        path: path.resolve("./dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js/,
                loader: 'babel-loader',
                query:{
                    presets:[
                    '@babel/react',
                    '@babel/env'
                    ]
                }
            }
        ]
    }
}
