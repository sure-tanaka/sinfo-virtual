var AjaxControl = Class.create();

function onLoadAjaxControl() {
	try {
		onLoadAjaxPageControl()
		ctrl = new AjaxControl();
	} catch (e) {
		alert("onLoadAjaxControl:"+e);
	}
}

AjaxControl.prototype = {

	initialize: function() {
	},

	
	//地図
	add_page: function () {
		apc.add_page();
	},
	

	//代理
	agent:function(acode) {
		window.open('users?acode='+acode, 'agent', 'menubar=no, toolbar=no, scrollbars=yes');
	}
};
