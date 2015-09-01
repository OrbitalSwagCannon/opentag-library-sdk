//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("nextperformance.transactiontag.v1.Tag", {
	getDefaultConfig: function () {
      return {
		/*DATA*/
		name: "Transaction Tag",
		async: true,
		description: "Tag to be inserted on the order confirmation page, requires order ID, order number and amount excluding VAT.",
		html: "<script type=\"text/javascript\" src=\"//nxtck.com/act.php?zid=${zid}&id=${orderId}&mt=${total}\"></script><!--@SRC@-->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "Account (zid)",
			description: "zid value provided by NextPerformance",
			token: "zid",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "orderId",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Order Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.total"
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