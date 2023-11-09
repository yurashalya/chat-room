const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/",
						},
					},
				],
			},
			{
				test: /\.module\.scss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
							sourceMap: true,
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			components: path.resolve(__dirname, "src/components/"),
			pages: path.resolve(__dirname, "src/pages/"),
			store: path.resolve(__dirname, "src/store/"),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	// devServer: {
	// 	historyApiFallback: true,
	// 	publicPath: "/",
	// 	port: 3000,
	// 	hot: true,
	// },
	devServer: {
		port: 3000,
		static: {
			directory: path.join(__dirname, "dist"),
		},
		historyApiFallback: {
			index: "index.html",
			disableDotRule: true,
		},
		hot: true,
	},
};
