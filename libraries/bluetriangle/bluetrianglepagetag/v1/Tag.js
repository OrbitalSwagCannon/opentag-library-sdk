//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("bluetriangle.bluetrianglepagetag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Blue Triangle Page Tag",
		async: true,
		description: "Page tag should be implemented on all pages. Blue Triangle will provide your client ID.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "${clientId}.btttag.com/BTT/btt.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Client ID",
			description: "Client ID provided by Blue Triangle. e.g. demo.btttag.com/BTT/btt.js, demo is your client ID",
			token: "clientId",
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