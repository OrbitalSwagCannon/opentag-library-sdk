//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("qubit.uvlistuserinformation.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "UV List - User Information",
		async: true,
		description: "Test Universal Variables regarding users",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "User Full Name",
			description: "",
			token: "a",
			uv: "universal_variable.user.name"
		}, {
			name: "User Username",
			description: "",
			token: "b",
			uv: "universal_variable.user.username"
		}, {
			name: "User ID",
			description: "",
			token: "c",
			uv: "universal_variable.user.user_id"
		}, {
			name: "User Email",
			description: "",
			token: "d",
			uv: "universal_variable.user.email"
		}, {
			name: "User Language Preference",
			description: "",
			token: "e",
			uv: "universal_variable.user.language"
		}, {
			name: "User is Returning",
			description: "",
			token: "f",
			uv: "universal_variable.user.returning"
		}, {
			name: "User Facebook ID",
			description: "",
			token: "g",
			uv: "universal_variable.user.facebook_id"
		}, {
			name: "User Twitter ID",
			description: "",
			token: "h",
			uv: "universal_variable.user.twitter_id"
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		console.log("" + this.valueForToken("a"));
		console.log("" + this.valueForToken("b"));
		console.log("" + this.valueForToken("c"));
		console.log("" + this.valueForToken("d"));
		console.log("" + this.valueForToken("e"));
		console.log("" + this.valueForToken("f"));
		console.log("" + this.valueForToken("g"));
		console.log("" + this.valueForToken("h"));
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