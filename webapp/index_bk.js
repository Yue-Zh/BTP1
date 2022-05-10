sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({
		text: "Ready...",
		press: function () {
            jQuery.ajax({
                type: "POST",
                url: "https://internal-xsuaa.authentication.jp20.hana.ondemand.com/oauth/token?grant_type=client_credentials",
                contentType: "application/x-www-form-urlencoded",
                data: 'client_id=sb-na-7241840a-d668-448b-8f97-2f6bb0a9abe6!t326&client_secret=aHW13tPAQoL6wdpo5nBoif2nd5c=',

                async: false,
                success: function(data) {
                    MessageToast.show(data.access_token);
                }
            })
		}
	}).placeAt("content");

});