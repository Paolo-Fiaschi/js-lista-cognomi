// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.

// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// ---------------------------------------------------------------





// diachiarazioni variabili
var cognomeUtente, listaCognomi, cognomiPrecedentiNonOrdinati, cognomiPrecedentiOrdinati;

// lista cognomi originaria
listaCognomi = ["Messi", "Ronaldo", "Del Piero", "Baggio", "Zidane", "Dybala"];

console.log(listaCognomi);

// chiedere all'utente il cognome
cognomeUtente = prompt("Inserisci il tuo cognome");

console.log("il cognome aggiunto è: " + cognomeUtente);

// aggiungere il cognome utente all'array
listaCognomi.push(cognomeUtente);

console.log(listaCognomi);

document.getElementById('nonOrdinata').innerHTML = "<h2 id='nonOrdinata'>" + "Lista Non Ordinata" + "</h2>";

// ciclo per ogni item della listaCognomi NON ordinata e output
for (var i = 0; i < listaCognomi.length; i++) {

  cognomiPrecedentiNonOrdinati = document.getElementById('cognomiNonOrdinati').innerHTML;

  document.getElementById('cognomiNonOrdinati').innerHTML = cognomiPrecedentiNonOrdinati + "<li>" + listaCognomi[i] + "</li>";

}
console.log(cognomiPrecedentiNonOrdinati);
// ordinare la lista alfabeticamente
listaCognomi.sort();

console.log(listaCognomi);

document.getElementById('ordinata').innerHTML = "<h2 id='ordinata'>" + "Lista Ordinata" + "</h2>";
// ciclo per ogni item della listaCognomi ordinata e output
for (var i = 0; i < listaCognomi.length; i++) {

  cognomiPrecedentiOrdinati = document.getElementById('cognomiOrdinati').innerHTML;

  document.getElementById('cognomiOrdinati').innerHTML = cognomiPrecedentiOrdinati + "<li>" + listaCognomi[i] + "</li>";

}
console.log(cognomiPrecedentiOrdinati);

console.log(listaCognomi.indexOf(cognomeUtente) + 1);

// posizione cognomeUtente
document.getElementById('posizione').innerHTML = "<h3>" + "<span>" + cognomeUtente + "</span>" + " sei in posizione: " + (listaCognomi.indexOf(cognomeUtente) + 1) + "</h3>";
