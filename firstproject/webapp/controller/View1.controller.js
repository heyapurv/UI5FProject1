sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.demo.firstproject.controller.View1", {
        onInit() {
            
        },
        onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmit: function () {
            var name = this.getView().byId("nameInput").getValue();
            this.getView().byId("heading").setText(name)
            this.getView().byId("submitbtn").setType("Accept")
            this.getView().byId("heading").setTextAlign("Left")
            this.getView().byId("nameInput").setEnabled(false)

        }
    });
});