//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("affiliatewindow.mastertag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Master Tag",
		async: true,
		description: "The Affiliate Window Master Tag should run on all pages.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.dwin1.com/${MERCHANT_ID}.js",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Affiliate Window Merchant ID",
			description: "Affiliate Window Merchant ID",
			token: "MERCHANT_ID",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
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