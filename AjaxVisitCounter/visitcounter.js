var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
    var xmlHttp;

    if(window.ActiveXObject) { 
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e) {
            xmlHttp = false;
        }
    } else { 
        try {
            xmlHttp = new XMLHttpRequest();
        } catch (e) {
            xmlHttp = false;
        }
    }

    if (!xmlHttp)
        alert("Cant create that object !")
    else
        return xmlHttp;
}

function process() {
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
        xmlHttp.open("GET", "visitcounter.php?count=", true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    } 
}

function handleServerResponse() {
    if(xmlHttp.readyState == 4) { 
        if(xmlHttp.status == 200) {
            xmlResponse = xmlHttp.responseXML; 
            xmlDocumentElement = xmlResponse.documentElement;
            message = xmlDocumentElement.firstChild.data;
            document.getElementById("underInput").innerHTML = message;
            
        } else {
            alert('Someting went wrong !');
        }
    }
}
