//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"marinsoftware.clicktrackingtaganonymizeip.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "Click Tracking Tag - Anonymize IP",
			async: true,
			description: "This tag is the same as the Click Tracking tag but also anonymizes the user's IP address",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Marin Tracking ID",
				description: "Marin Tracking ID",
				token: "marin_tracking_id",
				uv: ""
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			window._mTrack = window._mTrack || [];

			_mTrack.push(['activateAnonymizeIp']);
			_mTrack.push(['trackPage']);

			var mClientId = "" + this.valueForToken("marin_tracking_id");
			var mProto = ('https:' == document.location.protocol ? 'https://' :
				'http://');
			var mHost = 'tracker.marinsm.com';
			var mt = document.createElement('script');
			mt.type = 'text/javascript';
			mt.async = true;
			mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
			var fscr = document.getElementsByTagName('script')[0];
			fscr.parentNode.insertBefore(mt, fscr);
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