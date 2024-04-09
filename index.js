import inquirer from 'inquirer'; // Importiert das 'inquirer'-Modul für die Benutzereingabe
import qr from 'qr-image'; // Importiert das 'qr-image'-Modul für die QR-Code-Erstellung
import fs from 'fs'; // Importiert das 'fs'-Modul für den Dateizugriff
import { writeFile } from 'fs'; // Importiert die 'writeFile'-Funktion aus dem 'fs'-Modul

inquirer
  .prompt([ // Startet die Benutzereingabe
    {
        message: "Gebe eine URL hier ein: ", // Der Text, der dem Benutzer angezeigt wird.
        name: "URL" // Der Schlüsselname, unter dem die Antwort gespeichert wird, in diesem Fall "URL".
    }
  ])
  .then((answers) => { // Handler, der aufgerufen wird, wenn die Benutzereingabe erfolgreich ist
    const url = answers.URL; // Extrahiert die URL aus den Benutzerantworten
    console.log(url); // Gibt die eingegebene URL in der Konsole aus

    // Generiert ein QR-Code-Bild aus der URL und schreibt es in eine Datei 'qr_code.png'
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    // Schreibt die URL in eine Textdatei 'url.txt'
    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err; // Fehlerbehandlung, wirft einen Fehler, wenn das Schreiben fehlschlägt
      console.log('Die Datei wurde gespeichert!'); // Gibt eine Erfolgsmeldung aus, wenn das Schreiben erfolgreich ist
    });
  })
  .catch((error) => { // Handler für Fehler, die während des Prompt-Vorgangs auftreten können
    if (error.isTtyError) {
      // Kann den Prompt in der aktuellen Umgebung nicht rendern
    } else {
      // Etwas anderes ist schief gelaufen
    }
  });
