sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.firstproject.controller.View2", {
        onInit() {
        },
        onPressBack: function () {
            // this.getOwnerComponent().getRouter().navTo("RouteView1");
            history.go(-1); // only for back navigation 
        }
    });
});