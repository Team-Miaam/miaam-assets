const { resolvePath } = require('../../../../utils');

function loader(tilemapSource) {
	const { projectRoot } = this.getOptions();

	const tileMap = JSON.parse(tilemapSource);
	tileMap.tilesets = tileMap.tilesets.map((tileSet) => ({
		...tileSet,
		source: resolvePath(projectRoot, this.resourcePath, tileSet.source),
	}));
	return JSON.stringify(tileMap);
}

module.exports = loader;
