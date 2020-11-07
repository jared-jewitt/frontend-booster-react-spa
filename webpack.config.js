const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  const ASSET_PATH = process.env.ASSET_PATH || "/";
  const HOST = process.env.HOST || "0.0.0.0";
  const PORT = process.env.PORT || 3000;
  const NODE_ENV = process.env.NODE_ENV;

  const BUILD_FILE_NAMES = {
    jsFileName: NODE_ENV === "development" ? "js/[name].js" : "js/[name].[contenthash:8].js",
    jsChunkFileName: NODE_ENV === "development" ? "js/[name].chunk.js" : "js/[id].[contenthash:8].chunk.js",
    stylesFileName: NODE_ENV === "development" ? "styles/[name].css" : "styles/[name].[contenthash:8].css",
    stylesChunkFileName: NODE_ENV === "development" ? "styles/[id].chunk.css" : "styles/[id].[contenthash:8].chunk.css",
    imagesFileName: NODE_ENV === "development" ? "images/[name].[ext]" : "images/[name].[contenthash:8].[ext]",
    fontsFileName: NODE_ENV === "development" ? "fonts/[name].[ext]" : "fonts/[name].[contenthash:8].[ext]",
  };

  const PATHS = {
    src: path.join(__dirname, "src"),
    public: path.join(__dirname, "public"),
    build: path.join(__dirname, "build"),
    node_modules: path.join(__dirname, "node_modules"),
    entry: path.join(__dirname, "src", "index.tsx"),
    template: path.join(__dirname, "public", "index.html"),
  };

  const baseConfig = {
    entry: {
      main: PATHS.entry,
    },
    output: {
      path: PATHS.build,
      publicPath: ASSET_PATH,
      filename: BUILD_FILE_NAMES.jsFileName,
      chunkFilename: BUILD_FILE_NAMES.jsChunkFileName,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        "@": PATHS.src,
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: NODE_ENV === "development",
              },
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer],
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: BUILD_FILE_NAMES.imagesFileName,
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: BUILD_FILE_NAMES.fontsFileName,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new MiniCssExtractPlugin({
        filename: BUILD_FILE_NAMES.stylesFileName,
        chunkFilename: BUILD_FILE_NAMES.stylesChunkFileName,
      }),
      new HtmlWebpackPlugin({
        template: PATHS.template,
      }),
      new CopyPlugin([
        {
          from: PATHS.public,
          to: PATHS.build,
          ignore: ["*.html"],
        },
      ]),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      }),
    ],
  };

  const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: PATHS.build,
      port: PORT,
      host: HOST,
      compress: true,
      hot: true,
      historyApiFallback: true,
      writeToDisk: true,
      stats: "errors-only",
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  };

  const prodConfig = {
    mode: "production",
    optimization: {
      minimize: true,
      moduleIds: "hashed",
      chunkIds: "named",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
          },
          commons: {
            name: "commons",
            chunks: "all",
            minChunks: 2,
            enforce: true,
          },
        },
      },
    },
  };

  return { ...baseConfig, ...(NODE_ENV === "development" ? devConfig : prodConfig) };
};
