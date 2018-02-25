Start();

function Start(){
	var index = Math.floor(Math.random()*28000);
	var url = 'https://www.wdl.org/ar/item/'+index+'/iiif/manifest.json';
	var voiceLink = 'https://app-na.readspeaker.com/cgi-bin/rsent?customerid=5147&lang=ar_ar&voice=Faris&readid=page-main&url=http%3A//www.wdl.org/ar/item/'+index+'/&audiofilename=WDL-'+index;
	var json = getDocumentText(url);
	obj = JSON.parse(json);

	if(obj.label == null){
		return Start();	
	}

	document.getElementById('title').innerText = obj.label;
	document.getElementById('description').innerText = obj.description;
	document.getElementById('imgLink').setAttribute('src', obj.thumbnail['@id']);
	document.getElementById('downBtn').setAttribute('href', obj.rendering[0]['@id']);
	document.getElementById('mainBtn').setAttribute('href', 'https://www.wdl.org/ar/item/'+index);
	document.getElementById('voiceLink').setAttribute('src', voiceLink);
}


function getDocumentText(url)
{
    try{
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, false );
        xmlhttp.send();
        return xmlhttp.responseText;
    }catch(x){
        console.log(x);
    }

}
