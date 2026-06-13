sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("com.demo.firstproject.controller.View4", {

        // Lifecyle hook called when the view loads
        onInit: function () {
            // 1. Initialize an empty JSON model for our table data binding
            const oUserModel = new JSONModel([]);
            this.getView().setModel(oUserModel, "userModel");

            // 2. Fetch any users already stored on the backend engine
            this._fetchUsers();
        },

        // Helper function to read user array from backend database/memory
        _fetchUsers: async function () {
            try {
                const response = await fetch("/api/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users list.");
                }
                const aUsers = await response.json();
                
                // Update our UI Model which dynamically updates the table rows
                this.getView().getModel("userModel").setData(aUsers);
            } catch (error) {
                console.error("Error reading users:", error);
            }
        },

        onSave: async function () {
            const name = this.byId("nameInput").getValue();
            const email = this.byId("emailInput").getValue();

            if (!name || !email) {
                MessageToast.show("Please enter both Name and Email.");
                return;
            }

            try {
                const response = await fetch("/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ message: "Server returned an error." }));
                    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                MessageToast.show(data.message);

                // Clear input boxes
                this.byId("nameInput").setValue("");
                this.byId("emailInput").setValue("");

                // Refresh the table layout data cleanly
                this._fetchUsers();

            } catch (error) {
                console.error("Save operation failed:", error);
                MessageToast.show(error.message || "Failed to communicate with the server.");
            }
        }
    });
});