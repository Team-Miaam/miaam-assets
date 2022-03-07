import { resolvePath } from '../../../../utils/index.js';

class Loader {
	options;

	constructor({ options }) {
		this.options = options;
	}

	add() {}

	pre() {}

	use(resource, next) {
		const resourcePath = resource.url;
		if (!this.test(resourcePath)) return next();

		const tileMap = resource.data;
		tileMap.tilesets = tileMap.tilesets.map((tileSet) => ({
			...tileSet,
			source: resolvePath(undefined, resourcePath, tileSet.source),
		}));

		return next();
	}

	test(fileName) {
		return /\.(tilemap|tileanimation).json/.test(fileName);
	}
}

export default Loader;
