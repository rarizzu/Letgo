var webpack = require('webpack'); //need this
var path = require('path');
module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery' //allows foundation to attach to the jquery plugin
    },
    plugins: [ //plugins will provide us a shortcut to using the jquery module, webpack will look for $ sign and then require jquery
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output:{
        path: __dirname,
        filename:"./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        // moduleDirectories: [
        //     'node_modules',
        //     './app/components',
        //     './app/api'
        // ],
        alias: {
            applicationStyles: 'app/styles/app.scss',
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Home: 'app/components/Home.jsx',
            Categories: 'app/components/Categories.jsx',
            Results: 'app/components/Results.jsx',
            ItemRoutes: 'app/routes/ItemRoutes.js',
            About: 'app/components/About.jsx',
            Item: 'app/models/Item.js',
            routes: 'app/routes/routes.js',
            ListItem: 'app/components/ListItem.jsx',
            New: 'app/components/New.jsx'
        },
        extensions: ["",".js",".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },

    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};