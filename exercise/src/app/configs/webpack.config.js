// const { resolve } = require('path')
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['css-loader'],
          },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            }
        ]
    },
}