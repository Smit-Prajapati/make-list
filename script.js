var download = false;
const button = document.getElementById("button");
const amountInput = document.getElementsByName("amount");
const checkboxes = document.getElementsByName("checkbox");


const gokulItemsList = ["Masala cup", "Tomato cup", "Plane", "ABCD", "Chowkadi", "Plain ponga", "Wheels", "Pasta", "Trayo", "Bhavnagri gathiya", "Nylon gathiya", "Sev", "Papdi", "Tikha mitha mix", "Dabela chana", "Chana dal", "Sakkarpara", "Masala noodles", "Masala kurkure", "Tomato kurkure", "Masala wafers", "Mori wafers", "Farali chevdo"];

const realItemsList = ["Ratlami sev", "Aaloo sev", "Sing bhujiya", "Moong dal", "Soya stick", "Soya chips", "Tomato kurkure", "Masala kurkure", "Mora sevmamra", "Tikha sevmamra", "Bhel mamra", "Farali tikho", "Farali mitho", "Tihi papdi", "Mori papdi", "Pasta", "Farali wafers", "Mori Wafers", "Noodles", "Polo ring", "Jeera papad", "Tikha papad", "Tarzan", "Mora bhoongala", "Pani puri cup"];

const companyName = document.getElementById("company-name").innerHTML;
if(companyName == "GOKUL") {
  items = gokulItemsList;
} else {
  items = realItemsList;
}

const itemsContainer = document.getElementById("items");

for(let i = 0; i < items.length; i++) {
  itemsContainer.appendChild(createLabel(i));
}

function createCheckbox(value) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkbox";
  checkbox.value = value;

  return checkbox;
}

function createNameDiv(value) {
  const div = document.createElement("div");
  div.classList.add("text");
  div.innerHTML = value;

  return div;
}

function createInputbox() {
  const inputBox = document.createElement("input");
  inputBox.type = "number";
  inputBox.name = "amount";
  inputBox.step = 0.5;
  inputBox.min = 0;

  return inputBox;
}

function createLabel(itemNumber) {
  const label = document.createElement("label");
  label.appendChild(createCheckbox(items[itemNumber]));
  label.appendChild(createNameDiv(items[itemNumber]));
  label.appendChild(createInputbox());

  return label;
}


//true if amount more than 0
for (let i = 0; i < checkboxes.length; i++) {
  amountInput[i].addEventListener("input", () => {
    if (+amountInput[i].value > 0) {
      checkboxes[i].checked = true;
      amountInput[i].style.border = " 2px solid rgb(255, 196, 0)";
    } else {
      checkboxes[i].checked = false;
      amountInput[i].style.border = " 1px solid grey";
    }
  });
}

//value 1 if checked
for (let i = 0; i < checkboxes.length; i++) {

    checkboxes[i].addEventListener("input", () => {
      if (checkboxes[i].checked == true) {
        amountInput[i].value = 1;
        amountInput[i].style.border = " 2px solid rgb(255, 196, 0)";
      } else {
        amountInput[i].value = "";
        amountInput[i].style.border = " 1px solid grey";
      }
    });
}

function downloadImage() {
  getSelectedItems();
  if (download == true) {
    location.href = "#download-pic";
    const divElement = document.getElementById("download-pic");

    html2canvas(divElement).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = getPicName() + ".png";
    link.click();
    });
  }
}

//get seleccted item
function getSelectedItems() {

  const selectedItems = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var print = checkboxes[i].value + " : " + amountInput[i].value;
      selectedItems.push(print);
    }
  }
  displaySelectedItems(selectedItems);
}

function displaySelectedItems(items) {

  var selectedItemsDiv = document.getElementById("selectedItems");
  selectedItemsDiv.innerHTML = "";

  if (items.length === 0) {
    alert("No items selected.");
    download = false;

  } else {
    download = true;
    var downloadPicDiv = document.getElementById("download-pic");

    downloadPicDiv.style.display = "block";

    selectedItemsDiv.appendChild(getCompanyLogo());

    var div = document.createElement("div");

    for (var i = 0; i < items.length; i++) {
      var p = document.createElement("p");
      p.appendChild(document.createTextNode(items[i]));
      div.appendChild(p);
    }

    selectedItemsDiv.appendChild(div);

    var dateDiv = document.createElement("div");
    dateDiv.innerHTML = getDate();
    dateDiv.classList.add("date");
    selectedItemsDiv.appendChild(dateDiv);
  }
}

function getCompanyLogo() {
  var logo = document.getElementById("company-logo").src;
  console.log(logo);
  var img = document.createElement("img");
  img.src = logo;

  return img;
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();

  return (
    " (" +
    ("0" + dd).slice(-2) +
    "/" +
    ("0" + (mm + 1)).slice(-2) +
    "/" +
    yyyy +
    ") "
  );
}

function getPicName() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  return (("0" + dd).slice(-2) +"" +("0" + (mm + 1)).slice(-2) +"" +yyyy +"" +("0" + hour).slice(-2) +"" +("0" + min).slice(-2) +"" +("0" + sec).slice(-2));
}
