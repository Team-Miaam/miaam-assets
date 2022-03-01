/* eslint-disable no-param-reassign */
const { resolvePath } = require('../../../../utils');

const plugin = (babel) => {
	const { types: t } = babel;

	return {
		name: 'resource-resolver-plugin',
		visitor: {
			Import(path, state) {
				const { projectRoot } = state.opts;
				const source = state.file.opts.filename;
				const importArg = path.container.arguments[0].value;
				const resolvedPath = resolvePath(projectRoot, source, importArg);
				const updatedResolvedPath = resolvedPath.substring(1).replaceAll(/(\/|\.)/gm, '_');
				const awaitExpression = path.parentPath;
				const importExpression = path.container;
				const loadChunkExpressionCallee = t.memberExpression(t.identifier('__MIAAM__'), t.identifier('loadChunk'));
				const loadChunkExpression = t.callExpression(loadChunkExpressionCallee, [
					t.stringLiteral(updatedResolvedPath),
					importExpression,
				]);
				awaitExpression.container.argument = loadChunkExpression;
			},
		},
	};
};

module.exports = plugin;
