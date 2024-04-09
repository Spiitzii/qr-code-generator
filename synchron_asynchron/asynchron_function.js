async function asyncOperation() { // Definition einer asynchronen Funktion mit dem Namen "asyncOperation"
    let promise = new Promise((resolve, reject) => { // Erzeugt ein neues Versprechen, das nach 2 Sekunden (2000 Millisekunden) aufgelöst wird
        setTimeout(() => resolve("Abgeschlossen"), 2000);
    });

    let result = await promise; // Das Schlüsselwort "await" wartet, bis das Versprechen erfüllt ist, und speichert das Ergebnis in der Variable "result"
    console.log(result); // Gibt das Ergebnis ("Abgeschlossen") in der Konsole aus
}

asyncOperation(); // Ruft die asynchrone Funktion "asyncOperation" auf
