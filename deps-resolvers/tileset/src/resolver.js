const { resolveTiledPaths } = require('../../../utils');

function resolver(tileSetSource, context) {
	const { projectRoot } = context.options;

	const tileSet = JSON.parse(tileSetSource);
	return [resolveTiledPaths(projectRoot, context.resourcePath, tileSet.image)];
}

module.exports = resolver;
