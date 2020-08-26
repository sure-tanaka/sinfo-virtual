var AjaxPageControl = Class.create();

function onLoadAjaxPageControl() {
	try {
		apc = new AjaxPageControl();
		ajaxEngine.registerRequest('sendAjax', 'user_ajax.php');
		ajaxEngine.registerAjaxObject('apc',apc);
	} catch (e) {
		alert("onLoadAjaxPageControl:"+e);
	}
}

AjaxPageControl.prototype = {

	initialize: function() {
		this.ajaxwin = null;
	},
	

	//セミナー案内
	add_page: function () {
		try {
			var nowdate =  new Date();
			var contentsource = "../seminar081115.html?dummy="+nowdate.getTime();
			this.ajaxwin=dhtmlwindow.open("ajaxbox","ajax",contentsource,"■セミナーのご案内","width=580px,height=280px,left=200px,top=120px,resize=1,scrolling=1")
			this.ajaxwin.moveTo('middle', 'middle');
		} catch (e) {
			alert("add_page:"+e);
		}
	},
	
	
	//行削除(Ajax)
	delete_row: function(childNode) {
		try {
			var id = ctrl.getMessage(childNode,"admin_seq");
			var tblobj = document.getElementById("ajax_table");
			for (i=1;i<tblobj.rows.length;i++) {
				if (tblobj.rows[i].id == id) {
					tblobj.deleteRow(i);
					break;
				}
			}
		} catch (e) {
			alert("delete_row:"+e);
		}
	}
};
