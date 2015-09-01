//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"sojern.advertisertagvacationproductpage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Advertiser Tag - Vacation Product Page",
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
				token: "product_id",
				uv: ""
			}]
			/*~DATA*/
      };
  },
		script: function() {
			/*SCRIPT*/
			(new Image()).src = "https://beacon.sojern.com/p/1?vpid=" +
				this.valueForToken("product_id");
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