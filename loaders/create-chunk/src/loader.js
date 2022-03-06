const chunkRegex = /__createChunk__\(('|")(.*)('|")\)/;

function loader(source) {
	const updatedSource = source.replaceAll(chunkRegex, '() => import($2)');
	console.log(updatedSource);
	return updatedSource;
}

module.exports = loader;
