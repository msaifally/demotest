/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/vesi/NorthWindOdataService/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
