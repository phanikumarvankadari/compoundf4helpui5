function initModel() {
	var sUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}