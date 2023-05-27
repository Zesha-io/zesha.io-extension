const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "manifest.json"),
                    to: path.resolve(__dirname, "..", "extension"),
                },
                {
                    from: path.resolve(
                        __dirname,
                        "public",
                        "service-worker.js"
                    ),
                    to: path.resolve(__dirname, "..", "extension"),
                },
                {
                    from: path.resolve(
                        __dirname,
                        "public",
                        "content-scripts.js"
                    ),
                    to: path.resolve(__dirname, "..", "extension"),
                },
                {
                    from: path.resolve(__dirname, "public", "icon"),
                    to: path.resolve(__dirname, "..", "extension"),
                },
                {
                    from: path.resolve(__dirname, "public", "images"),
                    to: path.resolve(__dirname, "..", "extension", "images"),
                },
            ],
        }),
        new HtmlPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader", // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".js"],
    },
    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "..", "extension"),
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //     },
    // },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlPlugin({
                title: "Zesha",
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
