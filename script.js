function calc() {
    let inputEl1 = document.getElementById("input1").value;
    let inputEl2 = document.getElementById("input2").value;
    let outputEl = document.getElementById("output");

    let selection = document.getElementById("selec").value;

    // Die Zeichenketten zu Ganzzahlen konvertieren und die Ergebnisse speichern
    let zahl1 = parseInt(inputEl1, 10);
    let zahl2 = parseInt(inputEl2, 10);

    if(selection === "option1") {

        if(!isNaN(zahl1) && !isNaN(zahl2)) {
            
            outputEl.style.color = 'black';
            // Die beiden Zahlen addieren
            let ergebnis = zahl1 + zahl2;

            // Das Ergebnis in das HTML-Element mit der ID 'output' einfügen
            outputEl.innerHTML = ergebnis;

        } else {
            alert("Invalid input: Make sure the input is not empty and that you only used numbers");
            outputEl.style.color = 'red';
            outputEl.innerHTML = "Invalid Input";
        }

    } else if(selection === "option2") {

        if(!isNaN(zahl1) && !isNaN(zahl2)) {
            
            outputEl.style.color = 'black';
            // Die beiden Zahlen subtrahieren
            let ergebnis = zahl1 - zahl2;

            // Das Ergebnis in das HTML-Element mit der ID 'output' einfügen
            outputEl.innerHTML = ergebnis;

        } else {
            alert("Invalid input: Make sure the input is not empty and that you only used numbers");
            outputEl.style.color = 'red';
            outputEl.innerHTML = "Invalid Input";
        }

    } else if(selection === "option3") {

        if(!isNaN(zahl1) && !isNaN(zahl2)) {
            
            outputEl.style.color = 'black';
            // Die beiden Zahlen multiplizieren
            let ergebnis = zahl1 * zahl2;

            // Das Ergebnis in das HTML-Element mit der ID 'output' einfügen
            outputEl.innerHTML = ergebnis;

        } else {
            alert("Invalid input: Make sure the input is not empty and that you only used numbers");
            outputEl.style.color = 'red';
            outputEl.innerHTML = "Invalid Input";
        }

    } else if(selection === "option4") {

        if(!isNaN(zahl1) && !isNaN(zahl2)) {
            
            outputEl.style.color = 'black';
            // Die beiden Zahlen dividieren
            let ergebnis = zahl1 / zahl2;

            // Das Ergebnis in das HTML-Element mit der ID 'output' einfügen
            outputEl.innerHTML = ergebnis;

        } else {
            alert("Invalid input: Make sure the input is not empty and that you only used numbers");
            outputEl.style.color = 'red';
            outputEl.innerHTML = "Invalid Input";
        }

    } else {

        // standartmäßig die Zahlen addieren wenn ein Fehler bei der Selektion auftreten sollte

        if(!isNaN(zahl1) && !isNaN(zahl2)) {
            
            outputEl.style.color = 'black';
            // Die beiden Zahlen addieren
            let ergebnis = zahl1 + zahl2;

            // Das Ergebnis in das HTML-Element mit der ID 'output' einfügen
            outputEl.innerHTML = ergebnis;

        } else {
            alert("Invalid input: Make sure the input is not empty and that you only used numbers");
            outputEl.style.color = 'red';
            outputEl.innerHTML = "Invalid Input";
        }

    }


}
