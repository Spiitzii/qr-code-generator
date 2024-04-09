function fetchWeather(city) { // Definition der Funktion fetchWeather mit dem Parameter city
    return new Promise((resolve, reject) => { // Rückgabe eines neuen Versprechens
        setTimeout(() => { // Verzögerung der Ausführung um 2000 Millisekunden
            const weatherData = { // Wetterdatenobjekt
                "Berlin": 20,
                "Paris": 22,
                "Madrid": 26,
                "London": 18
            };
            if (weatherData[city]) { // Überprüfung, ob Wetterdaten für die angegebene Stadt vorhanden sind
                resolve(`Die aktuelle Temperatur in ${city} ist ${weatherData[city]} Grad.`); // Erfolgreiche Auflösung des Versprechens mit einer Erfolgsmeldung
            } else {
                reject("Daten fuer diese Stadt fehlen."); // Ablehnung des Versprechens mit einer Fehlermeldung, wenn keine Wetterdaten für die Stadt vorhanden sind
            }
        }, 2000);
    });
}

async function showWeather(city) { // Definition der asynchronen Funktion showWeather mit dem Parameter city
    try { // Versuche den folgenden Code auszuführen
        const message = await fetchWeather(city); // Warte auf das Ergebnis des Versprechens von fetchWeather
        console.log(message); // Gib die Wetternachricht aus
    } catch (error) { // Fange Fehler ab
        console.error(error); // Gib den Fehler aus
    }
}

showWeather("Berlin"); // Rufe showWeather mit der Stadt "Berlin" auf
showWeather("Paris"); // Rufe showWeather mit der Stadt "Paris" auf
showWeather("New York"); // Rufe showWeather mit der Stadt "New York" auf
