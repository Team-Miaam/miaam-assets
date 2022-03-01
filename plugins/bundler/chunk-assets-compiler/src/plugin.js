class ChunkAssetCompilerPlugin {
	constructor({ miaamOptions, updateChunkIndex }) {
		this.miaamOptions = miaamOptions;
		this.updateChunkIndex = updateChunkIndex;
		this.pluginName = 'Chunk Asset Compiler Plugin';
	}

	getAllAssets(source) {
		const assetsPath = this.miaamOptions.paths.assets.substring(1);
		const regex = new RegExp(`('|")\\.?${assetsPath}((\\/[^/\\s\\"\\']+)+)('|")`, 'gm');
		let match;
		const assets = new Set();
		do {
			match = regex.exec(source);
			if (match) {
				let assetPath = match[0].substring(1, match[0].length - 1);
				if (assetPath.startsWith('.')) {
					assetPath = assetPath.substring(1);
				}
				assets.add(assetPath);
			}
		} while (match);

		return assets;
	}

	apply(compiler) {
		compiler.hooks.emit.tapAsync(this.pluginName, (compilation, done) => {
			const chunksAssetsIndex = {};
			compilation.chunks.forEach((chunk) => {
				chunk.files.forEach((filename) => {
					const source = compilation.assets[filename].source();
					const assets = this.getAllAssets(source);
					const chunkOriginalName = filename.split('.')[0];
					chunksAssetsIndex[chunkOriginalName] = assets;
				});
			});

			this.updateChunkIndex(chunksAssetsIndex);

			done();
		});
	}
}

module.exports = ChunkAssetCompilerPlugin;
