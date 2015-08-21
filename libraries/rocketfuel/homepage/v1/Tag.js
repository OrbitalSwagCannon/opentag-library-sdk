//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("rocketfuel.homepage.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Home Page",
		async: true,
		description: "Place on the site's home page. Intended to fire once per session - requires custom implementation to enforce this.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "RocketFuel Merchant ID",
			description: "The ID assigned to you by RocketFuel",
			token: "merchant_id",
			uv: ""
		}, {
			name: "RocketFuel Campaign ID",
			description: "The campaign ID for the specific campaign this tag applies to.",
			token: "campaign_id",
			uv: ""
		}, {
			name: "Random Number",
			description: "Random number for use as a cachebuster",
			token: "random",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		var img = new Image();
		img.src = "//" +
			this.valueForToken("campaign_id") + "p.rfihub.com/ca.gif?rb=" +
			this.valueForToken("merchant_id") + "&ca=" +
			this.valueForToken("campaign_id") + "&ra=" +
			this.valueForToken("random")
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