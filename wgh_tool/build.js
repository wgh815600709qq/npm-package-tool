// 构建发布
const webpack = require('webpack')
const uglify = require('uglifyjs-webpack-plugin')
const path = require('path')
const config = {
    entry: {
        tool:'./index.js'
    },
    output: {
        path: path.resolve(__dirname, 'wgh_tool'),
        filename: '[name].js'
    },
    plugins: [
        new uglify()
    ]
}
try {
    webpack(config, function(err, stats) {
        if (err) {
            throw err;
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))
    })
} catch(e) {
    console.log('e')
}
