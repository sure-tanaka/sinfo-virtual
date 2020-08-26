function tellFlash(targetSwf,myValue){
	whichObj(targetSwf).SetVariable('_level0.stageRO', myValue);
	/*if (document.getElementById){
		window.document[targetSwf].SetVariable('_level0.stageRO', myValue);
	} else if (document.all){
		document.all(targetSwf).SetVariable('_level0.stageRO', myValue);
	}*/
}

function whichObj(objName)

{

	if (navigator.appName=="Netscape")

	{

		return window.document[objName];

	}

	else

	{

		return window[objName];

	}

}