module.exports = {
	env: {
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		babelOptions: {
			presets: ['@babel/preset-env'],
		},
	},
	plugins: ['@babel', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		// printWidth rule in prettier is not working
		'max-len': ['error', { code: 120, tabWidth: 2 }],
		'import/extensions': ['error', 'always'],
		'no-underscore-dangle': ['error', { allow: ['__MIAAM__'] }],
	},
	root: true,
};
