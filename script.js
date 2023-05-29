var download = false;
const button = document.getElementById("button");
const amountInput = document.getElementsByName("amount");
const checkboxes = document.getElementsByName("checkbox");


//change color of border
for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i].checked);
    amountInput[i].addEventListener("input", () => {
      if (+amountInput[i].value > 0) {
        amountInput[i].style.border = " 2px solid rgb(255, 196, 0)";
      } 
    });
}

//true if amount more than 0
for (let i = 0; i < checkboxes.length; i++) {
  amountInput[i].addEventListener("input", () => {
    if (+amountInput[i].value > 0) {
      checkboxes[i].checked = true;
    } else {
      checkboxes[i].checked = false;
    }
  });
}



//value 1 if checked
for (let i = 0; i < checkboxes.length; i++) {

    checkboxes[i].addEventListener("input", () => {
      if (checkboxes[i].checked == true && amountInput[i].value == "") {
        amountInput[i].value = 1;
        amountInput[i].style.border = " 2px solid rgb(255, 196, 0)";
      } else {
        amountInput[i].value = "";
        amountInput[i].style.border = " 1px solid grey";
      }
    });
}

//get seleccted item
function getSelectedItems() {

  var selectedItemsDiv = document.getElementById("download-pic");

  const selectedItems = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked && +amountInput[i].value > 0) {
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
  var companyName = document.getElementById("company-name");
  var img = document.createElement("img");
  if (companyName.innerHTML === "GOKUL") {
    img.src = "images/gokul.png";
  } else {
    img.src = "images/real.png";
  }

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
