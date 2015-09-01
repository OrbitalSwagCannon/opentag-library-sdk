//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("sojern.advertisertaghotelproductpage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Advertiser Tag - Hotel Product Page",
		async: true,
		description: "",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Product ID",
			description: "Product ID",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		(new Image()).src = "https://beacon.sojern.com/p/1?hpid=" +
			this.valueForToken("id");
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});