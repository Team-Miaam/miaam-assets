const simulateResolvePath = (basePath, targetPath) => {
	const basePathDecomposed = basePath.split('/');
	const targetPathDecomposed = targetPath.split('/');
	if (basePathDecomposed[basePathDecomposed.length - 1].includes('.')) {
		basePathDecomposed.pop();
	}
	for (let i = 0; i < targetPathDecomposed.length; i += 1) {
		const pathSlice = targetPathDecomposed[i];
		if (pathSlice === '..') {
			basePathDecomposed.pop();
			targetPathDecomposed.splice(i, 1);
			i -= 1;
		} else if (pathSlice === '.') {
			targetPathDecomposed.splice(i, 1);
			i -= 1;
		}
	}

	const resolvedPath = basePathDecomposed.concat(targetPathDecomposed).join('/');
	return resolvedPath;
};

const resolvePath = (projectRoot, resourcePath, dependencyPath) => {
	const refactoredResourcePath = resourcePath.replaceAll('\\', '/');
	const refactoredDependencyPath = dependencyPath.replaceAll('\\', '/');
	let resolvedPath = simulateResolvePath(refactoredResourcePath, refactoredDependencyPath);

	if (projectRoot) {
		const refactoredProjectRoot = projectRoot.replaceAll('\\', '/');
		if (resolvedPath.startsWith(refactoredProjectRoot)) {
			// eslint-disable-next-line prefer-destructuring
			resolvedPath = resolvedPath.split(refactoredProjectRoot)[1];
		}
	}
	return resolvedPath;
};

module.exports = resolvePath;
