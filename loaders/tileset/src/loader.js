const { resolveTiledPaths } = require('../../../utils');

function loader(tileSetSource) {
	const { projectRoot } = this.getOptions();

	const tileSet = JSON.parse(tileSetSource);
	tileSet.image = resolveTiledPaths(projectRoot, this.resourcePath, tileSet.image);
	return JSON.stringify(tileSet);
}

module.exports = loader;
