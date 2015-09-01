//:import sdk.releases.Current

qubit.opentag.LibraryTag.define(
	"googleanalytics.googleanalyticswithdisplayadvertisingsupport.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Google Analytics with display advertising support",
			async: true,
			description: "See https://support.google.com/analytics/answer/2444872 for details.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Profile ID",
				description: "Your unique profile id for GA, e.g. UA-1234567",
				token: "profile_id",
				uv: ""
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + this.valueForToken("profile_id")]);
			_gaq.push(['_trackPageview']);

			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +
				'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
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