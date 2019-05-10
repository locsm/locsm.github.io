
var targetAddress = "locsmbial@gmail.com";
//var targetAddress = "sekretariat.bialystok@locsm.edu.pl";

var data_js = {
	"access_token": "rezuhkmc0q0i8lc4sgt0uep7"
};


function js_onSuccess() {
	console.log("Mail sent");
	document.getElementById("err-cantsend").style.display = "none";	
	document.getElementById("mailsent").style.display = "block";
}

function js_onError(error) {
	console.log("Sending failed");
	document.getElementById("mailsent").style.display = "none";	
	document.getElementById("err-cantsend").style.display = "block";
	document.getElementById("button-wyslij").disabled = false;	
}


function sendMail() {
	document.getElementById("button-wyslij").disabled = true;

	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			js_onSuccess();
		} else
		if(request.readyState == 4) {
			js_onError(request.response);
		}
	};

	var subject = "Podanie - " + eImie.value + " " + eNazwisko.value;
	var message = generateReportUnformatted();
	data_js['subject'] = subject;
	data_js['text'] = message;
	var params = toParams(data_js);

	request.open("POST", "https://postmail.invotes.com/send", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//request.setRequestHeader("Content-type", "text/html; charset=UTF-8");

	request.send(params);

	return false;
}

function toParams(data_js) {
	var form_data = [];
	for ( var key in data_js ) {
		form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
	}

	return form_data.join("&");
}