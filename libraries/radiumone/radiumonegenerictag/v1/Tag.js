//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("radiumone.radiumonegenerictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "RadiumOne - Generic tag",
		async: true,
		description: "RadiumOne is changing the face of online advertising through a unique combination of programmatic buying, proprietary data, patent-pending intelligence algorithms, and multi-channel capabilities.",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [

		]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		var img = new Image();
		img.src = "http://rs.gwallet.com/r1/pixel/x" + this.valueForToken("id") +
			"r" + Math.round(Math.random() * 10000000);
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