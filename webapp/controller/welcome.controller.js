sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("newbies.controller.welcome", {
		
		onInit: function () {
			//this.oUserModel = new JSONModel("/services/userapi/currentUser");
			this.oUserModel = new JSONModel();
			var me = this;
			this.oUserModel.attachRequestCompleted(function() {
				// this is referring oUserModel not the controller
				me.doSomethingWhenUserDataIsRead();
			});
			this.getView().setModel(this.oUserModel);
			console.log("See what we have in the model", this.oUserModel.getData());
		},
		doSomethingWhenUserDataIsRead: function () {
				console.log('Data is here after request complted', this.oUserModel.getData());
			
		},
		doShowMyName: function () {
			this.oUserModel.loadData("/services/userapi/currentUser");
		}
	});
});