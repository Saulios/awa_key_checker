/*
Paste the total contents of this file into your browser console
when you are on an Alienware Arena giveaway page.

Will show available key amount, level requirement and restrictions to certain countries.

Updated: March 19, 2021
*/

var country_with_keys = [];
var country_without_keys = [];
var countries = new function () {
	var list = [
		{
		code: "AF",
		name: "Afghanistan"}, {
		code: "AX",
		name: "Aland Islands"}, {
		code: "AL",
		name: "Albania"}, {
		code: "DZ",
		name: "Algeria"}, {
		code: "AS",
		name: "American Samoa"}, {
		code: "AD",
		name: "Andorra"}, {
		code: "AO",
		name: "Angola"}, {
		code: "AI",
		name: "Anguilla"}, {
		code: "AQ",
		name: "Antarctica"}, {
		code: "AG",
		name: "Antigua and Barbuda"}, {
		code: "AR",
		name: "Argentina"}, {
		code: "AM",
		name: "Armenia"}, {
		code: "AW",
		name: "Aruba"}, {
		code: "AU",
		name: "Australia"}, {
		code: "AT",
		name: "Austria"}, {
		code: "AZ",
		name: "Azerbaijan"}, {
		code: "BS",
		name: "Bahamas"}, {
		code: "BH",
		name: "Bahrain"}, {
		code: "BD",
		name: "Bangladesh"}, {
		code: "BB",
		name: "Barbados"}, {
		code: "BY",
		name: "Belarus"}, {
		code: "BE",
		name: "Belgium"}, {
		code: "BZ",
		name: "Belize"}, {
		code: "BJ",
		name: "Benin"}, {
		code: "BM",
		name: "Bermuda"}, {
		code: "BT",
		name: "Bhutan"}, {
		code: "BO",
		name: "Bolivia"}, {
		code: "BQ",
		name: "Bonaire, Sint Eustatius and Saba"}, {
		code: "BA",
		name: "Bosnia and Herzegovina"}, {
		code: "BW",
		name: "Botswana"}, {
		code: "BV",
		name: "Bouvet Island"}, {
		code: "BR",
		name: "Brazil"}, {
		code: "IO",
		name: "British Indian Ocean Territory"}, {
		code: "BN",
		name: "Brunei Darussalam"}, {
		code: "BG",
		name: "Bulgaria"}, {
		code: "BF",
		name: "Burkina Faso"}, {
		code: "BI",
		name: "Burundi"}, {
		code: "CV",
		name: "Cabo Verde"}, {
		code: "KH",
		name: "Cambodia"}, {
		code: "CM",
		name: "Cameroon"}, {
		code: "CA",
		name: "Canada"}, {
		code: "KY",
		name: "Cayman Islands"}, {
		code: "CF",
		name: "Central African Republic"}, {
		code: "TD",
		name: "Chad"}, {
		code: "CL",
		name: "Chile"}, {
		code: "CN",
		name: "China"}, {
		code: "CX",
		name: "Christmas Island"}, {
		code: "CC",
		name: "Cocos (Keeling) Islands"}, {
		code: "CO",
		name: "Colombia"}, {
		code: "KM",
		name: "Comoros"}, {
		code: "CG",
		name: "Congo"}, {
		code: "CD",
		name: "Congo"}, {
		code: "CK",
		name: "Cook Islands"}, {
		code: "CR",
		name: "Costa Rica"}, {
		code: "CI",
		name: "Côte d\"Ivoire"}, {
		code: "HR",
		name: "Croatia"}, {
		code: "CU",
		name: "Cuba"}, {
		code: "CW",
		name: "Curaçao"}, {
		code: "CY",
		name: "Cyprus"}, {
		code: "CZ",
		name: "Czech Republic"}, {
		code: "DK",
		name: "Denmark"}, {
		code: "DJ",
		name: "Djibouti"}, {
		code: "DM",
		name: "Dominica"}, {
		code: "DO",
		name: "Dominican Republic"}, {
		code: "EC",
		name: "Ecuador"}, {
		code: "EG",
		name: "Egypt"}, {
		code: "SV",
		name: "El Salvador"}, {
		code: "GQ",
		name: "Equatorial Guinea"}, {
		code: "ER",
		name: "Eritrea"}, {
		code: "EE",
		name: "Estonia"}, {
		code: "ET",
		name: "Ethiopia"}, {
		code: "FK",
		name: "Falkland Islands"}, {
		code: "FO",
		name: "Faroe Islands"}, {
		code: "FJ",
		name: "Fiji"}, {
		code: "FI",
		name: "Finland"}, {
		code: "FR",
		name: "France"}, {
		code: "GF",
		name: "French Guiana"}, {
		code: "PF",
		name: "French Polynesia"}, {
		code: "TF",
		name: "French Southern Territories"}, {
		code: "GA",
		name: "Gabon"}, {
		code: "GM",
		name: "Gambia"}, {
		code: "GE",
		name: "Georgia"}, {
		code: "DE",
		name: "Germany"}, {
		code: "GH",
		name: "Ghana"}, {
		code: "GI",
		name: "Gibraltar"}, {
		code: "GR",
		name: "Greece"}, {
		code: "GL",
		name: "Greenland"}, {
		code: "GD",
		name: "Grenada"}, {
		code: "GP",
		name: "Guadeloupe"}, {
		code: "GU",
		name: "Guam"}, {
		code: "GT",
		name: "Guatemala"}, {
		code: "GG",
		name: "Guernsey"}, {
		code: "GN",
		name: "Guinea"}, {
		code: "GW",
		name: "Guinea-Bissau"}, {
		code: "GY",
		name: "Guyana"}, {
		code: "HT",
		name: "Haiti"}, {
		code: "HM",
		name: "Heard Island and McDonald Islands"}, {
		code: "VA",
		name: "Holy See"}, {
		code: "HN",
		name: "Honduras"}, {
		code: "HK",
		name: "Hong Kong"}, {
		code: "HU",
		name: "Hungary"}, {
		code: "IS",
		name: "Iceland"}, {
		code: "IN",
		name: "India"}, {
		code: "ID",
		name: "Indonesia"}, {
		code: "IR",
		name: "Iran"}, {
		code: "IQ",
		name: "Iraq"}, {
		code: "IE",
		name: "Ireland"}, {
		code: "IM",
		name: "Isle of Man"}, {
		code: "IL",
		name: "Israel"}, {
		code: "IT",
		name: "Italy"}, {
		code: "JM",
		name: "Jamaica"}, {
		code: "JP",
		name: "Japan"}, {
		code: "JE",
		name: "Jersey"}, {
		code: "JO",
		name: "Jordan"}, {
		code: "KZ",
		name: "Kazakhstan"}, {
		code: "KE",
		name: "Kenya"}, {
		code: "KI",
		name: "Kiribati"}, {
		code: "KP",
		name: "Korea"}, {
		code: "KR",
		name: "Korea"}, {
		code: "KW",
		name: "Kuwait"}, {
		code: "KG",
		name: "Kyrgyzstan"}, {
		code: "LA",
		name: "Lao"}, {
		code: "LV",
		name: "Latvia"}, {
		code: "LB",
		name: "Lebanon"}, {
		code: "LS",
		name: "Lesotho"}, {
		code: "LR",
		name: "Liberia"}, {
		code: "LY",
		name: "Libya"}, {
		code: "LI",
		name: "Liechtenstein"}, {
		code: "LT",
		name: "Lithuania"}, {
		code: "LU",
		name: "Luxembourg"}, {
		code: "MO",
		name: "Macao"}, {
		code: "MK",
		name: "Macedonia"}, {
		code: "MG",
		name: "Madagascar"}, {
		code: "MW",
		name: "Malawi"}, {
		code: "MY",
		name: "Malaysia"}, {
		code: "MV",
		name: "Maldives"}, {
		code: "ML",
		name: "Mali"}, {
		code: "MT",
		name: "Malta"}, {
		code: "MH",
		name: "Marshall Islands"}, {
		code: "MQ",
		name: "Martinique"}, {
		code: "MR",
		name: "Mauritania"}, {
		code: "MU",
		name: "Mauritius"}, {
		code: "YT",
		name: "Mayotte"}, {
		code: "MX",
		name: "Mexico"}, {
		code: "FM",
		name: "Micronesia"}, {
		code: "MD",
		name: "Moldova"}, {
		code: "MC",
		name: "Monaco"}, {
		code: "MN",
		name: "Mongolia"}, {
		code: "ME",
		name: "Montenegro"}, {
		code: "MS",
		name: "Montserrat"}, {
		code: "MA",
		name: "Morocco"}, {
		code: "MZ",
		name: "Mozambique"}, {
		code: "MM",
		name: "Myanmar"}, {
		code: "NA",
		name: "Namibia"}, {
		code: "NR",
		name: "Nauru"}, {
		code: "NP",
		name: "Nepal"}, {
		code: "NL",
		name: "Netherlands"}, {
		code: "NC",
		name: "New Caledonia"}, {
		code: "NZ",
		name: "New Zealand"}, {
		code: "NI",
		name: "Nicaragua"}, {
		code: "NE",
		name: "Niger"}, {
		code: "NG",
		name: "Nigeria"}, {
		code: "NU",
		name: "Niue"}, {
		code: "NF",
		name: "Norfolk Island"}, {
		code: "MP",
		name: "Northern Mariana Islands"}, {
		code: "NO",
		name: "Norway"}, {
		code: "OM",
		name: "Oman"}, {
		code: "PK",
		name: "Pakistan"}, {
		code: "PW",
		name: "Palau"}, {
		code: "PS",
		name: "Palestine"}, {
		code: "PA",
		name: "Panama"}, {
		code: "PG",
		name: "Papua New Guinea"}, {
		code: "PY",
		name: "Paraguay"}, {
		code: "PE",
		name: "Peru"}, {
		code: "PH",
		name: "Philippines"}, {
		code: "PN",
		name: "Pitcairn"}, {
		code: "PL",
		name: "Poland"}, {
		code: "PT",
		name: "Portugal"}, {
		code: "PR",
		name: "Puerto Rico"}, {
		code: "QA",
		name: "Qatar"}, {
		code: "RE",
		name: "Réunion"}, {
		code: "RO",
		name: "Romania"}, {
		code: "RU",
		name: "Russia"}, {
		code: "RW",
		name: "Rwanda"}, {
		code: "BL",
		name: "Saint Barthélemy"}, {
		code: "SH",
		name: "Saint Helena, Ascension and Tristan da Cunha"}, {
		code: "KN",
		name: "Saint Kitts and Nevis"}, {
		code: "LC",
		name: "Saint Lucia"}, {
		code: "MF",
		name: "Saint Martin"}, {
		code: "PM",
		name: "Saint Pierre and Miquelon"}, {
		code: "VC",
		name: "Saint Vincent and the Grenadines"}, {
		code: "WS",
		name: "Samoa"}, {
		code: "SM",
		name: "San Marino"}, {
		code: "ST",
		name: "Sao Tome and Principe"}, {
		code: "SA",
		name: "Saudi Arabia"}, {
		code: "SN",
		name: "Senegal"}, {
		code: "RS",
		name: "Serbia"}, {
		code: "SC",
		name: "Seychelles"}, {
		code: "SL",
		name: "Sierra Leone"}, {
		code: "SG",
		name: "Singapore"}, {
		code: "SX",
		name: "Sint Maarten"}, {
		code: "SK",
		name: "Slovakia"}, {
		code: "SI",
		name: "Slovenia"}, {
		code: "SB",
		name: "Solomon Islands"}, {
		code: "SO",
		name: "Somalia"}, {
		code: "ZA",
		name: "South Africa"}, {
		code: "GS",
		name: "South Georgia and the South Sandwich Islands"}, {
		code: "SS",
		name: "South Sudan"}, {
		code: "ES",
		name: "Spain"}, {
		code: "LK",
		name: "Sri Lanka"}, {
		code: "SD",
		name: "Sudan"}, {
		code: "SR",
		name: "Suriname"}, {
		code: "SJ",
		name: "Svalbard and Jan Mayen"}, {
		code: "SZ",
		name: "Swaziland"}, {
		code: "SE",
		name: "Sweden"}, {
		code: "CH",
		name: "Switzerland"}, {
		code: "SY",
		name: "Syrian Arab Republic"}, {
		code: "TW",
		name: "Taiwan, Province of China"}, {
		code: "TJ",
		name: "Tajikistan"}, {
		code: "TZ",
		name: "Tanzania"}, {
		code: "TH",
		name: "Thailand"}, {
		code: "TL",
		name: "Timor-Leste"}, {
		code: "TG",
		name: "Togo"}, {
		code: "TK",
		name: "Tokelau"}, {
		code: "TO",
		name: "Tonga"}, {
		code: "TT",
		name: "Trinidad and Tobago"}, {
		code: "TN",
		name: "Tunisia"}, {
		code: "TR",
		name: "Turkey"}, {
		code: "TM",
		name: "Turkmenistan"}, {
		code: "TC",
		name: "Turks and Caicos Islands"}, {
		code: "TV",
		name: "Tuvalu"}, {
		code: "UG",
		name: "Uganda"}, {
		code: "UA",
		name: "Ukraine"}, {
		code: "AE",
		name: "United Arab Emirates"}, {
		code: "GB",
		name: "United Kingdom"}, {
		code: "US",
		name: "United States of America"}, {
		code: "UM",
		name: "United States Minor Outlying Islands"}, {
		code: "UY",
		name: "Uruguay"}, {
		code: "UZ",
		name: "Uzbekistan"}, {
		code: "VU",
		name: "Vanuatu"}, {
		code: "VE",
		name: "Venezuela"}, {
		code: "VN",
		name: "Vietnam"}, {
		code: "VG",
		name: "Virgin Islands (British)"}, {
		code: "VI",
		name: "Virgin Islands (U.S.)"}, {
		code: "WF",
		name: "Wallis and Futuna"}, {
		code: "EH",
		name: "Western Sahara"}, {
		code: "YE",
		name: "Yemen"}, {
		code: "ZM",
		name: "Zambia"}, {
		code: "ZW",
		name: "Zimbabwe"}, {
		code: "AN",
		name: "Netherlands Antilles"}, {
		code: "CS",
		name: "Serbia and Montenegro"}, {
		code: "AC",
		name: "Ascension Island"}, {
		code: "CP",
		name: "Clipperton Island"}, {
		code: "DG",
		name: "Diego Garcia"}, {
		code: "EA",
		name: "Ceuta, Melilla"}, {
		code: "EU",
		name: "European Union"}, {
		code: "IC",
		name: "Canary Islands"}, {
		code: "TA",
		name: "Tristan da Cunha"}, {
		code: "QO",
		name: "Outlying Oceania"}
    ];
	var codes = {};

	for (var i = 0; i < list.length; ++i) {
		var entry = list[i];
		codes[entry.code] = entry;
	}

	this.getEntry = function (code) {
		return codes[code];
	};
};

for (var country in countryKeys) {
	var get_country = countries.getEntry(country);
	var get_country_name = get_country.name
	if (countryKeys[country]["normal"].length === 0 && countryKeys[country]["prestige"].length === 0) {
		country_without_keys.push(" " + get_country_name);
	} else {
		country_with_keys.push(" " + get_country_name);
	}
};
country_with_keys.sort();
country_without_keys.sort();
console.log();
if (country_without_keys.length !== 0 && country_with_keys.length !== 0) {
	console.log("Countries with keys:" + country_with_keys);
} else if (country_with_keys.length === 0) {
	console.log("All out! There are no more keys left in this giveaway!");
} else {
	console.log("Every country has keys available!");
}
for (var country in countryKeys) {
	if (countryKeys[country]["normal"].length === 0 && countryKeys[country]["prestige"].length === 0) {
		continue
	};
	for (var level in countryKeys[country]["normal"]) {
		console.log("Key Availability:");
		console.log("Level: " + level + " - Keys: " + countryKeys[country]["normal"][level]);
		for (var level in countryKeys[country]["prestige"]) {
			console.log("Level: 30 - Keys: " + countryKeys[country]["prestige"][level]);
		};
	};
	if (countryKeys[country]["normal"].length === 0 && countryKeys[country]["prestige"].length !== 0) {
		for (var level in countryKeys[country]["prestige"]) {
			console.log("Key Availability:");
			console.log("Level: 30 - Keys: " + countryKeys[country]["prestige"][level]);
		};
	};
	break
};
console.log();
if (country_without_keys.length !== 0 && country_with_keys.length !== 0) {
	console.log("Countries without keys:" + country_without_keys);
	console.log();
}
