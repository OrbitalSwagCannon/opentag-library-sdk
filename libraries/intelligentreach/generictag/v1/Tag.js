//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("intelligentreach.generictag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Generic Tag",
		async: true,
		description: "Tag to be applied to all pages",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "www.ist-track.com/ContainerJavaScript.ashx?id=${id}",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			name: "Intelligent Reach ID",
			description: "",
			token: "id",
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