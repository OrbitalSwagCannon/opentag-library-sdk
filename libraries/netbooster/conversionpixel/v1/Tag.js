//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("netbooster.conversionpixel.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Conversion pixel",
		async: true,
		description: "",
		html: "\n",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Pixel ID",
			description: "",
			token: "pixel_id",
			uv: ""
		}, {
			name: "Client ID",
			description: "",
			token: "client_id",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Partner ID",
			description: "",
			token: "partner_id",
			uv: ""
		}]
		/*~DATA*/
		};
	},
	script: function() {
		/*SCRIPT*/
		window.img = new Image();
		img.src = "//conversion-pixel.invitemedia.com/pixel?pixelID=" + 
				this.valueForToken("pixel_id") + "&clientID=" +
				this.valueForToken("client_id") + "&partnerID=" +
				this.valueForToken("partner_id") + "&key=conv&orderID=" +
				this.valueForToken("order_id") + "&returnType=js";
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