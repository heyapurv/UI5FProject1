sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.demo.firstproject.controller.View1", {
        onInit() {
            
        },
        onPress: function () {
        this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmit: function () {
            var name = this.getView().byId("nameInput").getValue();
            var mobile = this.getView().byId("mobileInput").getValue();
            var email = this.getView().byId("emailInput").getValue();
            this.getView().byId("heading").setText(name)
            this.getView().byId("submitbtn").setType("Accept")
            this.getView().byId("heading").setTextAlign("Left")
            this.getView().byId("nameInput").setEnabled(false)
            this.getView().byId("nameData").setText("Name : "+name)
            this.getView().byId("mobileData").setText("Mobile : "+mobile)
            this.getView().byId("emailData").setText("Email : "+email)
            
            // submit message 
            sap.m.MessageToast.show("Thank You " + name);

            // clear input fields 
            this.getView().byId("nameInput").setValue("")
            this.getView().byId("mobileInput").setValue("")
            this.getView().byId("emailInput").setValue("")
        }
    });
});