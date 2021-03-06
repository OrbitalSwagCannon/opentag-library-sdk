//:import CurrentSDK

qubit.opentag.LibraryTag.define(
	"google.googleremarketingconversionasync.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing Conversion Async",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_id",
				uv: ""
			}],
		categories:[
			"Re-Targeting"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			var _this = this;
			var poll = function() {
				if (window.google_trackConversion) {
					google_trackConversion({
						google_conversion_id: "" + _this.valueForToken("google_id"),
						google_custom_params: {}
					});
				} else {
					setTimeout(poll, 100);
				}
			};

			poll();
			/*~post*/
		}
	});
