//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("optimizely.optimizely.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Optimizely",
		async: true,
		description: "Simple, fast, and powerful. Optimizely is a dramatically easier way for you to improve your website through A/B testing. Create an experiment in minutes with our easy to use visual interface with absolutely no coding or engineering required.",
		html: "<script type=\"text/javascript\" src=\"//cdn.optimizely.com/js/${ACCOUNT_ID}.js\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account Id",
			description: "Please enter your account ID. Do not include the .js",
			token: "ACCOUNT_ID",
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