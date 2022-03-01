/* eslint-disable no-param-reassign */
const plugin = (babel) => {
	const { types: t } = babel;

	return {
		name: 'create-chunk-plugin',
		visitor: {
			ExpressionStatement(path) {
				const { expression } = path.node;
				if (!expression) return;

				const { callee } = expression;
				if (!callee) return;
				if (callee.name !== '__createChunk__') return;

				const source = expression.arguments[0].value;
				const importExpression = t.callExpression(t.import(), [t.stringLiteral(source)]);
				const logicalExpression = t.logicalExpression('&&', t.identifier('__MIAAM__.UNDEFINED'), importExpression);
				path.node.expression = logicalExpression;
			},
		},
	};
};

module.exports = plugin;
