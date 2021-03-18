// eslint-disable-next-line import/no-extraneous-dependencies
const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot("/");

// mix.alias({
//   'connected-react-router': path.join(process.cwd(), 'node_modules/connected-react-router'),
//   react: path.join(process.cwd(), 'node_modules/react'),
//   history: path.join(process.cwd(), 'node_modules/history'),
//   'prop-types': path.join(process.cwd(), 'node_modules/prop-types'),
//   'react-router-dom': path.join(process.cwd(), 'node_modules/react-router-dom'),
//   '@reduxjs/toolkit': path.join(process.cwd(), 'node_modules/@reduxjs/toolkit'),
//   'redux-logger': path.join(process.cwd(), 'node_modules/redux-logger'),
//   'react-redux': path.join(process.cwd(), 'node_modules/react-redux'),
// });

// mix.babelConfig({
//     presets: ["@babel/preset-env", "@babel/preset-react"],
//     plugins: ["@babel/plugin-proposal-class-properties"],
// });

mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: "js/app/[id].js?id=[chunkhash]",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve("node_modules/@alangiacomin/ui-components")],
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
                    //plugins: ["@babel/plugin-proposal-class-properties"],
                },
            },
        ],
    },
});

mix.copy("src/index.html", "public/index.html");
mix.js("src/index.jsx", "public/js/app.js").react();

// mix.sass('resources/sass/app.scss', 'public/css');

// mix.extract();

mix.disableNotifications();
// mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.version();
    // mix.sourceMaps();
}

// mix.dump();
