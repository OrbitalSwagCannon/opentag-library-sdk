//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"deprecatedtags.testingdeprecatedtagsfolder.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Testing Deprecated Tags Folder",
			async: true,
			description: "",
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