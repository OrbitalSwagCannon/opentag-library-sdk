//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("lodash.lodashnoconflict.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Lodash NoConflict",
		async: true,
		description: "Load Lodash from a CDN in noConflict. Compat mode is loaded, so works in IE8.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "cdnjs.cloudflare.com/ajax/libs/lodash.js/${version}/lodash.compat.min.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Version",
			description: "The version number you wish to use e.g. \"1.2.1\"",
			token: "version",
			uv: ""
		}, {
			name: "NoConflict Key",
			description: "The window variable name you want to assign Lodash to. E.g. \"_noConflict\"",
			token: "key",
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
		window[this.valueForToken("key")] = window._.noConflict();
		/*~POST*/
	}
});