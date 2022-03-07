/* eslint-disable no-param-reassign */
const plugin = (babel) => {
	const { types: t } = babel;

	return {
		name: 'create-chunk-plugin',
		visitor: {
			CallExpression(path) {
				if (path.node.callee.name !== '__createChunk__') return;

				const expression = path.node;

				const source = t.stringLiteral(expression.arguments[0].value);
				const importExpression = t.callExpression(t.import(), [source]);
				const sourceProperty = t.objectProperty(t.identifier('source'), source);
				const loadFunctionExpression = t.arrowFunctionExpression([], importExpression, false);
				const loadProperty = t.objectProperty(t.identifier('load'), loadFunctionExpression);
				const objectExpression = t.objectExpression([sourceProperty, loadProperty]);
				path.container[path.key] = objectExpression;
			},
		},
	};
};

module.exports = plugin;
