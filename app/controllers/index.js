const defaultHTML= "<html><body><h1>TODO: Write Your own code here!!</h1></body></html>";
var file; 

 if(Ti.Filesystem.isExternalStoragePresent()){
 	file = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory,'test.html');
 }else{
 	file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'test.html');
 	
 }
if(!file.exists){
	file.createFile();
	file.write(defaultHTML);
	$.WebView.setHtml(defaultHTML);
	$.WebView.reload();
}
else{
	if(file.read().text == null || file.read().text =="")
		file.write(defaultHTML);
	$.WebView.setHtml(file.read().text);
	$.WebView.reload();
}






$.textAreaFTW.value= $.WebView.html;

$.previewTab.addEventListener("click", refresh);
$.index.open();

function save(){
	file.write($.textAreaFTW.value);
}
function returnToSaved(){
	$.textAreaFTW.value= file.read().text;
	refresh();
}

function resetToOriginal(){
	$.textAreaFTW.value= defaultHTML;
	refresh();
}

function refresh ( ) {
    $.WebView.setHtml($.textAreaFTW.value);
	$.WebView.reload();
}

