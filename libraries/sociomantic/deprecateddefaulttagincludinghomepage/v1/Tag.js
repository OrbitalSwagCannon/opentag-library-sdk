//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"sociomantic.deprecateddefaulttagincludinghomepage.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "{DEPRECATED} Default Tag (including Home Page)",
			async: true,
			description: "Homepage tracking code as Default for all pages that can't be assigned to a specific page type",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "eu-sonar.sociomantic.com/js/2010-07-01/adpan/${TOKEN}",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Advertiser Token",
				description: "Your Sociomantic customer ID. Please only use the token that has been created and sent to you.",
				token: "TOKEN",
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