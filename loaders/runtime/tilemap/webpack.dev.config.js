const path = require('path');

module.exports = {
	mode: 'development',
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
	entry: {
		index: './index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
	},
	watch: true,
	watchOptions: {
		ignored: '/node_modules/',
	},
	devtool: 'source-map',
};
