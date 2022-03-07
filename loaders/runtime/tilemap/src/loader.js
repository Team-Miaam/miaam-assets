import { resolvePath } from '../../../../utils/index.js';

class Loader {
	options;

	constructor({ options }) {
		this.options = options;
	}

	add() {}

	pre() {}

	use(resource, next) {
		console.log(resource);
		return next();

		const tileMap = resource.data;
		tileMap.tilesets = tileMap.tilesets.map((tileSet) => ({
			...tileSet,
			source: resolvePath(projectRoot, this.resourcePath, tileSet.source),
		}));

		return next();
	}
}

export default Loader;
