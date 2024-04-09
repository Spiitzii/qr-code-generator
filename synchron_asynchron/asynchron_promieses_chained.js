// Erzeugt ein neues Versprechen, das nach 1 Sekunde (1000 Millisekunden) aufgelöst wird
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    // Der erste Auflösungs-Handler, der aufgerufen wird, wenn das Versprechen erfüllt ist
    console.log(result); // Gibt das Ergebnis (1) aus
    return result * 2; // Gibt das Ergebnis verdoppelt (2) zurück
}).then((result) => {
    // Der zweite Auflösungs-Handler, der aufgerufen wird, wenn das vorherige Versprechen erfüllt ist
    console.log(result); // Gibt das Ergebnis (2) aus
    return result * 3; // Gibt das Ergebnis verdreifacht (6) zurück
}).then((result) => {
    // Der dritte Auflösungs-Handler, der aufgerufen wird, wenn das vorherige Versprechen erfüllt ist
    console.log(result); // Gibt das Ergebnis (6) aus
    // Da es keine Rückgabe gibt, wird implizit ein gelöstes Versprechen zurückgegeben
});
