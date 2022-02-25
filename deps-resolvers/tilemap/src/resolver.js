const { resolveTiledPaths } = require('../../../utils');

function resolver(tilemapSource) {
	const { projectRoot } = this.getOptions();

	const tileMap = JSON.parse(tilemapSource);
	const dependencies = tileMap.tilesets.map(({ source }) => resolveTiledPaths(projectRoot, this.resourcePath, source));
	return dependencies;
}

module.exports = resolver;
