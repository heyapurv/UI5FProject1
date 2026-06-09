sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.firstproject.controller.View1", {
        onInit() {
            
        },
        onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});