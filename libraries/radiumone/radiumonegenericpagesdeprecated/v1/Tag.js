//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"radiumone.radiumonegenericpagesdeprecated.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*DATA*/
			name: "RadiumOne - Generic Pages DEPRECATED",
			async: true,
			description: "",
			html: "\n\n",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Shop ID",
				description: "The unique ID for the store",
				token: "shop_id",
				uv: ""
			}]
			/*~DATA*/
		};
		},
		script: function() {
			/*SCRIPT*/
			// Get timestamp (cachebuster)
			var time = new Date().getTime();
			// Iframe
			iframe = document.createElement('iframe');
			iframe.src = "//rs.gwallet.com/r1/pixel/x6036r" + time + "?shop_id=" +
				this.valueForToken("shop_id");
			iframe.width = 1;
			iframe.height = 1;
			iframe.frameBorder = 0;
			iframe.marginWidth = 0;
			iframe.marginHeight = 0;
			iframe.scrolling = 'no';
			document.body.appendChild(iframe);
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