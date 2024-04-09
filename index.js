import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'fs';


inquirer
  .prompt([ //Dies ist eine Benutzereingabe
    /* Pass your questions in here */
    {
        message: "Gebe eine URL hier ein: ", //Der Text, der dem Benutzer angezeigt wird.
        name: "URL" //Der Schlüsselname, unter dem die Antwort gespeichert wird, in diesem Fall "URL".
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    console.log(url)

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');

    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });