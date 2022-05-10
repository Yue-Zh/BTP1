sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.btp.sapui5.controller.View1", {
            onInit: function () {
                jQuery.ajax({
                    type: "POST",
                    url: "https://zzyjpm3bc6vpbxdq.authentication.jp20.hana.ondemand.com/oauth/token?grant_type=client_credentials",
                    contentType: "application/json",
                    dataType: "json",
                    data: '{"client_id":"sb-8a11295d-5193-4dc6-b805-1e09670ba4ba!b326|ans-xsuaa!b84","client_secret":"1d2f7323-bbcb-4e8b-9624-8a00d7f34bc0$WS86r8g4hfTTIInZVSWGWXVAUroydBrE8ELy7h1KKUk="}',
                    async: false,
                    success: function(data) {
                        MessageToast.show(data);
                    }
                })
            }
        });
    });
