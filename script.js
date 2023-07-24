var download = false;
const button = document.getElementById("button");
const amountInput = document.getElementsByName("amount");
const checkboxes = document.getElementsByName("checkbox");
const companyName = document.getElementById("company-name").innerHTML;
var gujaratiCheckBox = document.getElementById("gujarati");
var selectedItemsAmount = [];
var totalItems = 0;
var totalPrice = 0;


const realItemsList = [
  {name: 'Ratlami sev', price: 51},
  {name: 'Aaloo sev', price: 51},
  {name: 'Sing bhujiya', price: 51},
  {name: 'Moong dal', price: 54},
  {name: 'Soya stick', price: 51},
  {name: 'Soya chips', price: 51},
  {name: 'Tomato kurkure', price: 51},
  {name: 'Masala kurkure', price: 51},
  {name: 'Mora sevmamra', price: 51},
  {name: 'Tikha sevmamra', price: 51},
  {name: 'Bhel mamra', price: 51},
  {name: 'Farali tikho', price: 51},
  {name: 'Farali mitho', price: 54},
  {name: 'Tikhi papdi', price: 51},
  {name: 'Mori papdi', price: 51},
  {name: 'Pasta', price: 51},
  {name: 'Farali wafers', price: 54},
  {name: 'Mori wafers', price: 54},
  {name: 'Noodles', price: 50},
  {name: 'Polo ring', price: 50},
  {name: 'Jeera papad', price: 50},
  {name: 'Tikha papad', price: 50},
  {name: 'Tarzan', price: 50},
  {name: 'Mora bhoongala', price: 50},
  {name: 'Pani puri cup', price: 50},
];

const realItemsListGujarati = [
  {name: 'રતલામી સેવ', price: 51},
  {name: 'આલૂ સેવ', price: 51},
  {name: 'સીંગ ભુજીયા', price: 51},
  {name: 'મૂંગ દાળ', price: 54},
  {name: 'સોયા સ્ટિક', price: 51},
  {name: 'સોયા ચિપ્સ', price: 51},
  {name: 'ટોમેટો કુરકુરે', price: 51},
  {name: 'મસાલા કુરકુરે', price: 51},
  {name: 'મોરા  સેવમમરા', price: 51},
  {name: 'તીખા સેવમમરા', price:51},
  {name: 'ભેળ મમરા', price: 51},
  {name: 'ફરાળી તીખો', price: 51},
  {name: 'ફરાળી મીઠો', price: 54},
  {name: 'તીખી પાપડી', price: 51},
  {name: 'મોરી પાપડી', price: 51},
  {name: 'પાસ્તા', price: 51},
  {name: 'ફરાળી વેફર્સ', price: 54},
  {name: 'મોરી વેફર્સ', price: 54},
  {name: 'નૂડલ્સ', price: 50},
  {name: 'પોલો રીંગ', price: 50},
  {name: 'જીરા પાપડ', price: 50},
  {name: 'તીખા પાપડ', price: 50},
  {name: 'ટાર્ઝન', price: 50},
  {name: 'મોરા ભૂંગળા', price: 50},
  {name: 'પાણી પુરી કુરકુરે', price: 51},
  {name: 'ચાના દાળ', price: 51},
  {name: 'ચાના ચોર ગરમ', price: 51},
  {name: 'ગાંઠિયા', price: 51},
  {name: 'બીકાનેરી સેવ', price: 51},
  {name: 'મસાલા સીંગ', price: 51},
  {name: 'પંજાબી તડકા', price: 51},
  {name: 'ખટ્ટ મીઠ ચવાણું', price: 51},
  {name: 'નડિયાદી મિક્સ', price: 51},
  {name: 'ઇન્દોરી મિક્સ', price: 51},
  {name: 'પાપડ ચવાણું', price: 51},
  {name: 'પૌવા ચેવડા', price: 51},
  {name: 'મકાઈ ચેવડા', price: 51},
  {name: 'તીખા મીઠા મિક્સ', price: 51},
];



const gokulItemsList = [
  {name: 'Masala cup', price: 26},
  {name: 'Tomato cup', price: 26},
  {name: 'Plane', price: 26},
  {name: 'ABCD', price: 26},
  {name: 'Chowkadi', price: 26},
  {name: 'Plain ponga', price: 26},
  {name: 'Wheels', price: 26},
  {name: 'Pasta', price: 26},
  {name: 'Trayo', price: 26},
  {name: 'Bhavnagri gathiya', price: 51},
  {name: 'Nylon gathiya', price: 51},
  {name: 'Sev', price: 51},
  {name: 'Papdi', price: 51},
  {name: 'Tikha mitha mix', price: 51},
  {name: 'Dabela chana', price: 51},
  {name: 'Chana dal', price: 51},
  {name: 'Sakkarpara', price: 51},
  {name: 'Masala noodles', price: 42.50},
  {name: 'Masala kurkure', price: 51},
  {name: 'Tomato kurkure', price: 51},
  {name: 'Masala wafers', price: 52},
  {name: 'Mori wafers', price: 52},
  {name: 'Farali chevdo', price: 51},
  {name: 'Vanela gathiya', price: 51},
  {name: 'Bhakharwadi', price: 51},
  {name: 'Tikha gathiya', price: 51},
  {name: 'Ratlami sev', price: 51},
  {name: 'Sing Bhujia', price: 51},
  {name: 'Adad papad (₹10)', price: 8},
  {name: 'Chanadal (500g)', price: 90},
  {name: 'Dabela chana (500g)', price: 90},
  {name: 'Bhavnagari gathiya (500g)', price: 90},
  {name: 'Nylon gathiya (500g)', price: 90},
  {name: 'Vanela gathiya (500g)', price: 90},
  {name: 'Ratlami sev (500g)', price: 90},
  {name: 'Sing bhujiya (500g)', price: 90},
  {name: 'Sakkarpara (500g)', price: 90},
  {name: 'Tikha mitha mix (500g)', price: 65},
];

gujaratiCheckBox.addEventListener('change', function() {
  localStorage.setItem('checkboxValue', this.checked);
  location.reload();
});

const storedValue = localStorage.getItem('checkboxValue');
if (storedValue !== null) {
  gujaratiCheckBox.checked = storedValue === 'true';
}

if(companyName == "GOKUL") {
  items = gokulItemsList;
} else if(gujaratiCheckBox.checked){
  items = realItemsListGujarati;
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
  checkbox.value = value.name;

  return checkbox;
}

function createNameDiv(value) {
  const div = document.createElement("div");
  div.classList.add("text");
  div.innerHTML = value.name;

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
  totalItems = 0;
  totalPrice = 0;
  selectedItemsAmount = [];

  const selectedItems = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      // var print = checkboxes[i].value + " : " + amountInput[i].value; 
      selectedItemsAmount.push(+(amountInput[i].value));
      selectedItems.push(items[i]);
      totalItems = totalItems + (+amountInput[i].value);
      totalPrice = totalPrice + ((+items[i].price) * +amountInput[i].value);
    }
  }
  console.log(selectedItemsAmount);
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
      var itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      var p = document.createElement("p");
      var span = document.createElement("span");

      p.appendChild(document.createTextNode(items[i].name + " : " + selectedItemsAmount[i]));
      span.appendChild(document.createTextNode("₹"+ items[i].price * (+(selectedItemsAmount[i]))));
      
      
      itemDiv.appendChild(p);
      itemDiv.appendChild(span);

      div.appendChild(itemDiv);

    }

    selectedItemsDiv.appendChild(div);

    var totalItemsDiv = document.createElement("div");
    totalItemsDiv.innerHTML = "Total items : " + totalItems;
    totalItemsDiv.classList.add("total-items");

    var totalPriceDiv = document.createElement("div");
    totalPriceDiv.innerHTML = "₹" + totalPrice;
    totalPriceDiv.classList.add("total-price");
    

    var totalDiv = document.createElement("div");
    totalDiv.classList.add("total-div");

    totalDiv.appendChild(totalItemsDiv);
    totalDiv.appendChild(totalPriceDiv);
    selectedItemsDiv.appendChild(totalDiv);




    var dateDiv = document.createElement("div");
    dateDiv.innerHTML = getDate();
    dateDiv.classList.add("date");
    selectedItemsDiv.appendChild(dateDiv);

    
  }
}

function getCompanyLogo() {
  var logo = document.getElementById("company-logo").src;
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

  return (companyName + "_" + ("0" + dd).slice(-2) +"_" +("0" + (mm + 1)).slice(-2) +"_" +yyyy +"_" +("0" + hour).slice(-2) +"-" +("0" + min).slice(-2) +"-" +("0" + sec).slice(-2));
}
