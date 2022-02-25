const path = require('path');

const resolveTiledPath = (projectRoot, resourcePath, dependencyPath) =>
	path.join('/', path.relative(projectRoot, path.resolve(resourcePath, dependencyPath)));

module.exports = resolveTiledPath;
