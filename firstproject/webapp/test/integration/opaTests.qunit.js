/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/demo/firstproject/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
