//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("freespee.aesptag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "AESP TAG",
		async: true,
		description: "Blah",
		html: "",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Test Param 1",
			description: "Test",
			token: "test_param2",
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