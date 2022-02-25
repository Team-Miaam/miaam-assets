const { resolveTiledPaths } = require('../../../utils');

function resolver(tileSetSource) {
	const { projectRoot } = this.getOptions();

	const tileSet = JSON.parse(tileSetSource);
	return [resolveTiledPaths(projectRoot, this.resourcePath, tileSet.image)];
}

module.exports = resolver;
