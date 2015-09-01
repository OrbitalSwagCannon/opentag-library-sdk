//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("peerius.brandpagedeprecated.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Brand Page DEPRECATED",
		async: true,
		description: "DO NOT USE. Peerius tag for the brand page",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "pt.peerius.com/tracker/peerius.page",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Peerius Language",
			description: "The language of the page the tag is on",
			token: "lang",
			uv: "universal_variable.user.language"
		}, {
			name: "Peerius Page Brand",
			description: "The brand relating to the current brand category",
			token: "brand",
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
		window.PeeriusCallbacks.track = {
			type: "brand",
			lang: "" + this.valueForToken("lang"),
			brand: "" + this.valueForToken("brand")
		};

		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});