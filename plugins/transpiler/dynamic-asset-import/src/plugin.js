/* eslint-disable no-param-reassign */
export default (babel) => {
	const { types: t } = babel;
	let resourceManagerImported = false;

	return {
		name: 'resource-resolver-plugin',
		visitor: {
			Import(path, state) {
				const source = path.container.arguments[0].value;
				console.log(source, state.opts);
			},
		},
	};
};
