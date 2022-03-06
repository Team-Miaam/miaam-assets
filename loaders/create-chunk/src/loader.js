const chunkRegex = /__createChunk__\(('|")(.*)('|")\)/gm;

function loader(source) {
	const updatedSource = source.replaceAll(chunkRegex, "{source: '$2', load: () => import('$2')}");
	return updatedSource;
}

module.exports = loader;
