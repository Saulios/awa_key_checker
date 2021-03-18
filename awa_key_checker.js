var country_without_keys = []

for (var country in countryKeys) {
    if (countryKeys[country]["normal"].length === 0) {
        country_without_keys.push(country);
    }
    for (var level in countryKeys[country]["normal"]) {
        console.log("Country code: " + country);
        console.log("Level: " + level + " - Keys: " + countryKeys[country]["normal"][level]);
    for (var level in countryKeys[country]["prestige"]) {
        console.log("Level: 30 - Keys: " + countryKeys[country]["prestige"][level]);
    }
    }
}
console.log("Countries without keys: " + country_without_keys);
