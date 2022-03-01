const { resolvePath } = require('../../../utils');

function resolver(tilemapSource, context) {
	const { projectRoot } = context.options;

	const tileMap = JSON.parse(tilemapSource);
	const dependencies = tileMap.tilesets.map(({ source }) => resolvePath(projectRoot, context.resourcePath, source));
	return dependencies;
}

module.exports = resolver;
