import path from "node:path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const outputPath = path.resolve(__dirname,"./dist");

const config:webpack.Configuration = {
    name: "entry",
    target: "web",
    entry: path.resolve(__dirname, "../portal/src/index.tsx"),
    output: {
        filename: "entry.[fullhash].js",
        path: outputPath,
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                config:path.resolve(__dirname,"./postcss.config.js")
                            }
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "node_modules/react/umd/react.production.min.js"),
                    to: path.resolve(outputPath, "react.production.min.js")
                },
                {
                    from: path.resolve(__dirname, "node_modules/react-dom/umd/react-dom.production.min.js"),
                    to: path.resolve(outputPath, "react-dom.production.min.js")
                },
            ]
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../portal/public/index.html")
        })
    ]
}

export default config;