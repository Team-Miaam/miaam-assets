const { resolvePath } = require('../../../utils');

function loader(tileSetSource) {
	const { projectRoot } = this.getOptions();

	const tileSet = JSON.parse(tileSetSource);
	tileSet.image = resolvePath(projectRoot, this.resourcePath, tileSet.image);
	return JSON.stringify(tileSet);
}

module.exports = loader;
