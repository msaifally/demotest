/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/vesi/NorthWindOdataService/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});