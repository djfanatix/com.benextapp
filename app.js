"use strict";

const Homey = require('homey');

class BenextApp extends Homey.App {
	onInit() {
		this.log(`${Homey.manifest.id} running...`);
	}
}

module.exports = BenextApp;