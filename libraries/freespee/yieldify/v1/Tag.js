//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("freespee.yieldify.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Yieldify",
		async: true,
		description: "Yieldify is a software solution which allows you to maximise your opt-in rates and revenue from visitors leaving your website.",
		html: "<!-- Start of Yieldify Code -->\n \n<!-- End of Yieldify Code -->",
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

		(function(d) {
			var e = d.createElement('script');
			e.src = d.location.protocol +
				'//app.yieldify.com/yieldify/code.js?yieldify_id=216&loca=' + window.location
				.href;
			e.async = true;
			d.getElementsByTagName("head")[0].appendChild(e);
		}(document));

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