class HelloWorldPlugin {
	// eslint-disable-next-line class-methods-use-this
	apply(compiler) {
		compiler.hooks.done.tap('Hello World Plugin', (stats) => {
			console.log('Hello World!', stats);
		});
	}
}

module.exports = HelloWorldPlugin;
