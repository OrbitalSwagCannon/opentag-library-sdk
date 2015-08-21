//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"qubit.qubitqtrackerresenduniversalvariable.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "QuBit QTracker - resend Universal Variable",
			async: true,
			description: "Ties in with QuBit QTracker, re-sending Universal Variables to QTracker when they exist on the page. This is useful when the Universal Variable is not declared before OpenTag.",
			html: "",
			locationDetail: "",
			isPrivate: false,
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
			// Wait for UV and then resend data to QTracker
			var wait = function() {
				if (window.universal_variable) {
					window._qtd = window._qtd || [];
					window._qtd.push({
						resendUniversalVariables: 1
					});
				} else {
					setTimeout(wait, 200);
				}
			};
			wait();
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