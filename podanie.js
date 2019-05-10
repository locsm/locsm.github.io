
var eJestemUczniem;
var eDoKlasy;
var eKlasaWojskowa;
var eKlasaGranicznej;
var eKlasaPolicyjna;
var eKlasaPozarnej;

var eImie;
var eNazwisko;
var ePesel;

var eDataUrodzeniaArr;
var eMiejsceUrodzenia;

var eMatkaImieNazwisko;
var eOjciecImieNazwisko;
var eMatkaAdres;
var eOjciecAdres;
var eMatkaTelefon;
var eOjciecTelefon;
var eMatkaEmail;
var eOjciecEmail;

var eAdresArr;
var eAltAdresArr;
var eTelefon;
var eEmail;
var eSzkola;
var eRokUkonczenia;

var eSporty;
var eOsiagniecia;
var eDzialalnosc;
var eWolontariaty;
var eWyniki;
var eZachowanie;
var eSrednia;




function fillVars()
{
	eJestemUczniem = document.getElementById("form-jestemuczniem");
	eDoKlasy = document.getElementById("form-doklasy");
	eKlasaWojskowa = document.getElementById("form-klasa_wojskowa");
	eKlasaGranicznej = document.getElementById("form-klasa_granicznej");
	eKlasaPolicyjna = document.getElementById("form-klasa_policyjna");
	eKlasaPozarnej = document.getElementById("form-klasa_pozarnej");

	eImie = document.getElementById("form-imie");
	eNazwisko = document.getElementById("form-nazwisko");
	ePesel = document.getElementById("form-pesel");
	eDataUrodzeniaArr = [document.getElementById("form-dataurodzenia_dzien"), document.getElementById("form-dataurodzenia_miesiac"), document.getElementById("form-dataurodzenia_rok")];
	eMiejsceUrodzenia = document.getElementById("form-miejsceurodzenia");

	eMatkaImieNazwisko = document.getElementById("form-matka_imieinazwisko");
	eOjciecImieNazwisko = document.getElementById("form-ojciec_imieinazwisko");
	eMatkaAdres = document.getElementById("form-matka_adres");
	eOjciecAdres = document.getElementById("form-ojciec_adres");
	eMatkaTelefon = document.getElementById("form-matka_telefon");
	eOjciecTelefon = document.getElementById("form-ojciec_telefon");
	eMatkaEmail = document.getElementById("form-matka_email");
	eOjciecEmail = document.getElementById("form-ojciec_email");

	eAdresArr = [document.getElementById("form-adres"), document.getElementById("form-adres_miejscowosc"), document.getElementById("form-adres_kod")];
	eAltAdresArr = [document.getElementById("form-altadres"), document.getElementById("form-altadres_miejscowosc"), document.getElementById("form-altadres_kod")];
	eTelefon = document.getElementById("form-telefon");
	eEmail = document.getElementById("form-email");
	eSzkola = document.getElementById("form-szkola");
	eRokUkonczenia = document.getElementById("form-rokukonczenia");

	eSporty = document.getElementById("extraform-sporty");
	eOsiagniecia = document.getElementById("extraform-osiagniecia");
	eDzialalnosc = document.getElementById("extraform-dzialalnosc");
	eWolontariaty = document.getElementById("extraform-wolontariaty");
	eWyniki = document.getElementById("extraform-wyniki");
	eZachowanie = document.getElementById("extraform-zachowanie");
	eSrednia = document.getElementById("extraform-srednia");
}



function validateForm()
{
	var missingFields = 0;
	var errcolor = "#f44336";
	var isValid = true;

	if(!eJestemUczniem.value)
	{
		++missingFields;
		eJestemUczniem.style.borderColor = errcolor;
	}
	else eJestemUczniem.style.borderColor = "";
	if(!eDoKlasy.value)
	{
		++missingFields;
		eDoKlasy.style.borderColor = errcolor;
	}
	else eDoKlasy.style.borderColor = "";
	if(!eImie.value)
	{
		++missingFields;
		eImie.style.borderColor = errcolor;
	}
	else eImie.style.borderColor = "";
	if(!eNazwisko.value)
	{
		++missingFields;
		eNazwisko.style.borderColor = errcolor;
	}
	else eNazwisko.style.borderColor = "";
	if(!eDataUrodzeniaArr[0].value)
	{
		++missingFields;
		eDataUrodzeniaArr[0].style.borderColor = errcolor;
	}
	else eDataUrodzeniaArr[0].style.borderColor = "";
	if(!eDataUrodzeniaArr[1].value)
	{
		++missingFields;
		eDataUrodzeniaArr[1].style.borderColor = errcolor;
	}
	else eDataUrodzeniaArr[1].style.borderColor = "";
	if(!eDataUrodzeniaArr[2].value)
	{
		++missingFields;
		eDataUrodzeniaArr[2].style.borderColor = errcolor;
	}
	else eDataUrodzeniaArr[2].style.borderColor = "";
	if(!eMiejsceUrodzenia.value)
	{
		++missingFields;
		eMiejsceUrodzenia.style.borderColor = errcolor;
	}
	else eMiejsceUrodzenia.style.borderColor = "";
	if(!eAdresArr[0].value)
	{
		++missingFields;
		eAdresArr[0].style.borderColor = errcolor;
	}
	else eAdresArr[0].style.borderColor = "";
	if(!eAdresArr[1].value)
	{
		++missingFields;
		eAdresArr[1].style.borderColor = errcolor;
	}
	else eAdresArr[1].style.borderColor = "";
	if(!eAdresArr[2].value)
	{
		++missingFields;
		eAdresArr[2].style.borderColor = errcolor;
	}
	else eAdresArr[2].style.borderColor = "";
	if(!eTelefon.value)
	{
		++missingFields;
		eTelefon.style.borderColor = errcolor;
	}
	else eTelefon.style.borderColor = "";


	var isPeselValid = true;
	if(!ePesel.value || ePesel.value.length < 11 || isNaN(ePesel.value))
	{
		ePesel.style.borderColor = errcolor;
		isPeselValid = false;
	}
	else ePesel.style.borderColor = "";


	var isClassChoiceValid = true;
	var classes = [eKlasaWojskowa, eKlasaGranicznej, eKlasaPolicyjna, eKlasaPozarnej];
	var classChoices = [eKlasaWojskowa.value, eKlasaGranicznej.value, eKlasaPolicyjna.value, eKlasaPozarnej.value];
	var numChosen = 0;
	for(var i=0; i < 4; ++i)
	{
		classes[i].style.borderColor = "";

		if(classChoices[i])
			++numChosen;
	}

	if(numChosen < 3)
	{
		document.getElementById("klasy-prosimywypelnic").style.color = errcolor;
		isClassChoiceValid = false;
	}
	else
	{
		document.getElementById("klasy-prosimywypelnic").style.color = "";

		for(var i = 0; i < 4; ++i)
		{
			for(var j = i + 1; j < 4; ++j)
			{
				if(classChoices[i] == classChoices[j])
				{
					classes[i].style.borderColor = errcolor;
					classes[j].style.borderColor = errcolor;
					isClassChoiceValid = false;
				}
			}
		}
	}


	if(missingFields > 0 || !isPeselValid)
	{
		document.getElementById("err-missingfields").style.display = "block";
	}
	else document.getElementById("err-missingfields").style.display = "none";	

	if(!isClassChoiceValid)
	{
		document.getElementById("err-invalidclasschoice").style.display = "block";
	}
	else document.getElementById("err-invalidclasschoice").style.display = "none";	
	


	if(isValid && missingFields == 0 && isPeselValid && isClassChoiceValid)
	{
		console.log("Form is valid");
		return true;
	}
	else
	{
		console.log("Invalid form");
		return false;
	}
}



function generateReport()
{
	var classes = [null, eKlasaWojskowa, eKlasaGranicznej, eKlasaPolicyjna, eKlasaPozarnej];	
	var classNames = ["", "Klasa wojskowa (komandosów)", "Klasa straży granicznej", "Klasa policyjno-kryminologiczna", "Klasa straży pożarnej"];
	var classChoices = [];
	for(var i=1; i <= 3; ++i)
	{
		for(var j=1; j <= 4; ++j)
		{
			if(classes[j].value == i)
			{
				classChoices[i] = classNames[j];
			}
		}
	}

	var str = "";

	str += 	"<!DOCTYPE html><html><head></head>"
	str += 	"<body style=\"font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 16px;\">"
	str += 		"<div style=\"font-weight: bold; text-align: center;\">";
	str += 			"<p>PODANIE O PRZYJĘCIE DO SZKOŁY</p>";
	str += 			"<p>Liceum Ogólnokształcące Centrum Szkół Mundurowych w&nbsp;Białymstoku</p><p>pod patronatem Uniwersytetu w&nbsp;Białymstoku i&nbsp;Akademii Sztuki Wojennej</p>";
	str += 		"</div>";
	str += 		"<div>";
	str += 			"<p>Jestem uczniem " + eJestemUczniem.value + ".</p>";
	str += 			"<p>Proszę o przyjęcie do klasy " + eDoKlasy.value + " Liceum Ogólnokształcącego Centrum Szkół Mundurowych w&nbsp;Białymstoku w&nbsp;roku szkolnym 2019/2020.</p>"
	str += 		"</div>";
	str += 		"<div>";
	str += 			"<p>Wybieram klasę o profilu:<br />";
	str +=			"1. " + classChoices[1] + "<br />";
	str +=			"2. " + classChoices[2] + "<br />";
	str +=			"3. " + classChoices[3];
	str += 		"</div>";
	str += 		"<div>";
	str += 			"<p>Imię/imiona: " + eImie.value + "</p>";
	str += 			"<p>Nazwisko: " + eNazwisko.value + "</p>";
	str += 			"<p>Pesel: " + ePesel.value + "</p>";
	str += 			"<p>Data i miejsce urodzenia: " + eDataUrodzeniaArr[0].value + " " + eDataUrodzeniaArr[1].value + " " + eDataUrodzeniaArr[2].value + ", " + eMiejsceUrodzenia.value + "</p>";
	str += 		"</div>";
	str +=		"<div>";
	str +=			"<p>Imię i nazwisko matki: " + eMatkaImieNazwisko.value + "</p>";
	str +=			"<p>Adres matki: " + eMatkaAdres.value + "</p>";
	str +=			"<p>Telefon matki: " + eMatkaTelefon.value + "</p>";
	str +=			"<p>E-mail matki: " + eMatkaEmail.value + "</p>";
	str +=			"<p>Imię i nazwisko ojca: " + eOjciecImieNazwisko.value + "</p>";
	str +=			"<p>Adres ojca: " + eOjciecAdres.value + "</p>";
	str +=			"<p>Telefon ojca: " + eOjciecTelefon.value + "</p>";
	str +=			"<p>E-mail ojca: " + eOjciecEmail.value + "</p>";
	str += 		"</div>";
	str += 		"<div>";
	str += 			"<p>Adres zamieszkania: " + eAdresArr[0].value + ", " + eAdresArr[1].value + " " + eAdresArr[2].value + "</p>";
	str += 			"<p>Adres zameldowania: " + eAltAdresArr[0].value + ", " + eAltAdresArr[1].value + " " + eAltAdresArr[2].value + "</p>";
	str += 			"<p>Telefon: " + eTelefon.value + "</p>";
	str += 			"<p>E-mail: " + eEmail.value + "</p>";
	str += 			"<p>Nazwa ukończonej szkoły: " + eSzkola.value + "</p>";
	str += 			"<p>Rok ukończenia: " + eRokUkonczenia.value + "</p>";
	str +=		"</div>";
	str +=		"<div>";
	str += 			"<p style=\"font-weight: bold;\">Dodatkowe informacje";
	str +=			"<div>";
	str += 			"<p>Trenowane sporty</p>";
	str += 			"<p>" + eSporty.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Osiągnięcia w konkursach i olimpiadach</p>";
	str += 			"<p>" + eOsiagniecia.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Działalność społeczna (np. samorząd szkolny)</p>";
	str += 			"<p>" + eDzialalnosc.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Działalność w wolontariatach</p>";
	str += 			"<p>" + eWolontariaty.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Wysokie wyniki w nauce (jakie przedmioty)</p>";
	str += 			"<p>" + eWyniki.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Ocena półroczna z zachowania z ostatniej klasy</p>";
	str += 			"<p>" + eZachowanie.value + "</p>";
	str +=			"</div>";
	str +=			"<div>";
	str += 			"<p>Średnia ocen na półrocze z ostatniej klasy</p>";
	str += 			"<p>" + eSrednia.value + "</p>";
	str +=			"</div>";
	str += 		"</div>";
	str += 	"</body></html>";

	return str;
}


function generateReportUnformatted()
{
	var classes = [null, eKlasaWojskowa, eKlasaGranicznej, eKlasaPolicyjna, eKlasaPozarnej];	
	var classNames = ["", "Klasa wojskowa (komandosów)", "Klasa straży granicznej", "Klasa policyjno-kryminologiczna", "Klasa straży pożarnej"];
	var classChoices = [];
	for(var i=1; i <= 3; ++i)
	{
		for(var j=1; j <= 4; ++j)
		{
			if(classes[j].value == i)
			{
				classChoices[i] = classNames[j];
			}
		}
	}

	var str = "";


	str += 			"\tPODANIE O PRZYJĘCIE DO SZKOŁY\n";
	str += 			"\tLiceum Ogólnokształcące Centrum Szkół Mundurowych w&nbsp;Białymstoku pod patronatem Uniwersytetu w&nbsp;Białymstoku i Akademii Sztuki Wojennej\n";
	str += 			"\n";
	str += 			"Jestem uczniem " + eJestemUczniem.value + "\n";
	str += 			"Proszę o przyjęcie do klasy " + eDoKlasy.value + " Liceum Ogólnokształcącego Centrum Szkół Mundurowych w Białymstoku w roku szkolnym 2019/2020.\n"
	str += 			"Wybieram klasę o profilu:\n";
	str +=			"1. " + classChoices[1] + "\n";
	str +=			"2. " + classChoices[2] + "\n";
	str +=			"3. " + classChoices[3] + "\n";
	str += 			"\n";
	str += 			"Imię/imiona: " + eImie.value + "\n";
	str += 			"Nazwisko: " + eNazwisko.value + "\n";
	str += 			"Pesel: " + ePesel.value + "\n";
	str += 			"Data i miejsce urodzenia: " + eDataUrodzeniaArr[0].value + " " + eDataUrodzeniaArr[1].value + " " + eDataUrodzeniaArr[2].value + ", " + eMiejsceUrodzenia.value + "\n";
	str +=			"Imię i nazwisko matki: " + eMatkaImieNazwisko.value + "\n";
	str +=			"Adres matki: " + eMatkaAdres.value + "\n";
	str +=			"Telefon matki: " + eMatkaTelefon.value + "\n";
	str +=			"E-mail matki: " + eMatkaEmail.value + "\n";
	str +=			"Imię i nazwisko ojca: " + eOjciecImieNazwisko.value + "\n";
	str +=			"Adres ojca: " + eOjciecAdres.value + "\n";
	str +=			"Telefon ojca: " + eOjciecTelefon.value + "\n";
	str +=			"E-mail ojca: " + eOjciecEmail.value + "\n";
	str += 			"Adres zamieszkania: " + eAdresArr[0].value + ", " + eAdresArr[1].value + " " + eAdresArr[2].value + "\n";
	str += 			"Adres zameldowania: " + eAltAdresArr[0].value + ", " + eAltAdresArr[1].value + " " + eAltAdresArr[2].value + "\n";
	str += 			"Telefon: " + eTelefon.value + "\n";
	str += 			"E-mail: " + eEmail.value + "\n";
	str += 			"Nazwa ukończonej szkoły: " + eSzkola.value + "\n";
	str += 			"Rok ukończenia: " + eRokUkonczenia.value + "\n";
	str +=			"\n";
	str += 			"\tDodatkowe informacje\n";
	str += 			"Trenowane sporty\n";
	str += 			eSporty.value + "\n";
	str += 			"\n";
	str += 			"Osiągnięcia w konkursach i olimpiadach\n";
	str += 			eOsiagniecia.value + "\n";
	str += 			"\n";
	str += 			"Działalność społeczna (np. samorząd szkolny)\n";
	str += 			eDzialalnosc.value + "\n";
	str += 			"\n";
	str += 			"Działalność w wolontariatach\n";
	str += 			eWolontariaty.value + "\n";
	str += 			"\n";
	str += 			"Wysokie wyniki w nauce (jakie przedmioty)\n";
	str += 			eWyniki.value + "\n";
	str += 			"\n";
	str += 			"Ocena półroczna z zachowania z ostatniej klasy\n";
	str += 			eZachowanie.value + "\n";
	str += 			"\n";
	str += 			"Średnia ocen na półrocze z ostatniej klasy\n";
	str += 			eSrednia.value + "\n";
	str += 			"\n";

	return str;
}



function onBodyLoaded()
{
	fillVars();
	console.log("vars filled");
}