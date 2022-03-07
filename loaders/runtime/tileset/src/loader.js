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
		console.log(resource);

		const tilesSet = resource.data;
		tileSet.image = resolvePath(undefined, resourcePath, tileSet.image);
		return next();
	}

	test(fileName) {
		return /\.(tileset).json/.test(fileName);
	}
}

export default Loader;
