//:import CurrentSDK

qubit.opentag.LibraryTag.define(
	"googledoubleclick.doubleclickforadvertiserssimple.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "DoubleClick for Advertisers - Simple",
			async: true,
			description: "The non-conversion version of the DoubleClick tag",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Double Click Id",
				description: "Your unique identifier for your account",
				token: "doubleclick_id",
				uv: ""
			}, {
				name: "Type",
				description: "",
				token: "type",
				uv: ""
			}, {
				name: "Category",
				description: "",
				token: "cat",
				uv: ""
			}],
		categories:[
			"DSP (Ad Server)"
		]

			/*~config*/
		};
		},
		script: function() {
			/*script*/
			var axel = Math.random() + "";
			var a = axel * 1000000000000;
			var fl_if = document.createElement("iframe");
			fl_if.src = '//' + this.valueForToken("doubleclick_id") +
				'.fls.doubleclick.net/activityi;src=' + this.valueForToken("doubleclick_id") +
				';type=' + this.valueForToken("type") + ';cat=' + this.valueForToken("cat") +
				';ord=1;num=' + a + '?';
			fl_if.width = "1";
			fl_if.height = "1";
			fl_if.frameborder = "0";
			fl_if.style.display = "none";
			document.body.appendChild(fl_if);
			/*~script*/
		},
		pre: function() {
			/*pre*/
			/*~pre*/
		},
		post: function() {
			/*post*/
			/*~post*/
		}
	});
