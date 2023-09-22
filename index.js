let totalPrice = 0;

const formulaire = document.forms.formulaire;
const nameInput = formulaire.elements[0];
const emailInput = formulaire.elements[1];
const phoneNumberInput = formulaire.elements[2];
const addressInput = formulaire.elements[3];
const fruitSelect = document.getElementById("fruit");

function additionner() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneNumberInput.value;
  const address = addressInput.value;
  const fruit = fruitSelect.value;

  let price = 0;
  switch (fruit) {
    case "Pomme":
      price = 8;
      break;
    case "Melon":
      price = 13;
      break;
    case "Poire":
      price = 11;
      break;
    case "Banane":
      price = 6;
      break;
    case "Orange":
      price = 9;
      break;
    case "Fraise":
      price = 7;
      break;
    case "Cerise":
      price = 12;
      break;
    case "Ananas":
      price = 14;
      break;
    case "Kiwi":
      price = 10;
      break;
    case "Raisin":
      price = 8;
      break;
    case "Mangue":
      price = 15;
      break;
    case "Franboise":
      price = 9;
      break;
    case "pastèque":
      price = 16;
      break;
    case "Pêche":
      price = 10;
      break;
    case "Abricot":
      price = 7;
      break;
    case "Citron":
      price = 6;
      break;
    case "Papaye":
      price = 13;
      break;
    case "Goyave":
      price = 11;
      break;
    default:
      break;
  }

  totalPrice += price;

  alert(
    "Valeurs ajoutées : \n\nNom : " +
      name +
      "\nEmail : " +
      email +
      "\nNuméro de téléphone : " +
      phoneNumber +
      "\nAdresse : " +
      address +
      "\nFruit sélectionné : " +
      fruit +
      "\nPrix : " +
      price +
      "$\n\nPrix total : " +
      totalPrice +
      "$"
  );
}

function finaliser() {
  alert("Achat finalisé !\n\nPrix total : " + totalPrice + "$");
}

document
  .querySelector('button[onclick="additioner"]')
  .addEventListener("click", additionner);
document
  .querySelector('button[onclick="finaliser"]')
  .addEventListener("click", finaliser);
