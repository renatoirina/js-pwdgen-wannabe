// ACQUISIZIONE DATI
var name = prompt("Inserisci il tuo nome: ");
console.log("Nome inserito: ", name);
var surname = prompt("Inserisci il tuo cognome: ");
console.log("Cognome inserito: ", surname);
var favouriteColor = prompt("Inserisci il tuo colore preferito: ");
console.log("Colore preferito inserito: ", favouriteColor);

// GENERAZIONE NUMERO CASUALE
var casualNumber = Math.floor(Math.random() * 100);
console.log ("Numero generato RANDOM: ", casualNumber);

// OPERAZIONI LOGICHE
var password = name + surname + favouriteColor + casualNumber;
console.log("Password infallibile generata: ", password);

// VISUALIZZAZIONE