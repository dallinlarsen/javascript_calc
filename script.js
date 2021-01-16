/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */

document.title = "Calculator";

//This is the main div and all of it's children

var calculatorForm = document.createElement("form");
calculatorForm.setAttribute("id", "frm");
calculatorForm.setAttribute("name", "form1");

var input1 = document.createElement("input");
input1.setAttribute("type", "number");

var input2 = document.createElement("input");
input2.setAttribute("type", "number");

var colorDir = document.createElement("p");
colorDir.textContent = "Click below to select the color of the div containing the answer:";

var inputColor = document.createElement("input");
inputColor.setAttribute("type", "color");
inputColor.id = "color-picker";

var dropDown = document.createElement("select");
dropDown.id = "dropDown";

var optionAdd = document.createElement("option");
optionAdd.id = "addOption";
optionAdd.value = "add";
var addText = document.createTextNode("+");
optionAdd.appendChild(addText);

var optionSub = document.createElement("option");
optionSub.id = "subOption";
optionSub.value = "sub";
var subText = document.createTextNode("-");
optionSub.appendChild(subText);

var optionMult = document.createElement("option");
optionMult.id = "multOption";
optionMult.value = "mult";
var multText = document.createTextNode("*");
optionMult.appendChild(multText);

var optionDiv = document.createElement("option");
optionDiv.id = "divOption";
optionDiv.value = "div";
var divText = document.createTextNode("/");
optionDiv.appendChild(divText);

var optionMod = document.createElement("option");
optionMod.id = "modOption";
optionMod.value = "mod";
var modText = document.createTextNode("%");
optionMod.appendChild(modText);

var optionExp = document.createElement("option");
optionExp.id = "expOption";
optionExp.value = "exp";
var expText = document.createTextNode("**");
optionExp.appendChild(expText);

dropDown.appendChild(optionAdd);
dropDown.appendChild(optionSub);
dropDown.appendChild(optionDiv);
dropDown.appendChild(optionMult);
dropDown.appendChild(optionMod);
dropDown.appendChild(optionExp);

var calcButton = document.createElement("button");
var buttonText = document.createTextNode("Calculate!");
calcButton.appendChild(buttonText);
calcButton.addEventListener("click", calculate);

calculatorForm.appendChild(input1);
calculatorForm.appendChild(dropDown);
calculatorForm.appendChild(input2);
calculatorForm.appendChild(document.createElement("br"));
calculatorForm.appendChild(colorDir);
calculatorForm.appendChild(inputColor);

function getDateTime() {
    var date = new Date();
    return "(" + date.toLocaleDateString() + " " + date.toLocaleTimeString() + ") ";
}

function add(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var add = num1 + num2;
    var textElement = document.createTextNode(" " + num1 + " + " + num2 + " = " + add);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function sub(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var sub = num1 - num2;
    var textElement = document.createTextNode(" " + num1 + " - " + num2 + " = " + sub);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function mult(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var mult = num1 * num2;
    var textElement = document.createTextNode(" " + num1 + " * " + num2 + " = " + mult);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function divide(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var div = num1 / num2;
    var textElement = document.createTextNode(" " + num1 + " / " + num2 + " = " + div);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function mod(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var mod = num1 % num2;
    var textElement = document.createTextNode(" " + num1 + " % " + num2 + " = " + mod);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function exp(num1, num2) {
    var dateNode = document.createTextNode(getDateTime());
    var exp = num1 ** num2;
    var textElement = document.createTextNode(" " + num1 + " ** " + num2 + " = " + exp);
    textElement.className = "calc";
    var parag = document.createElement("p");
    parag.className = "shadowed";
    parag.appendChild(dateNode);
    parag.appendChild(textElement);
    return parag;
}

function calculate() {
    var calculationDiv = document.createElement("div");
    calculationDiv.tagName = "calcDiv";
    var formList = document.getElementById("frm");
    calculationDiv.className = "stuff-box";
    var parag;
    if (isNaN(formList[0].valueAsNumber) || isNaN(formList[2].valueAsNumber)) {
        calculationDiv.style.backgroundColor = "red";
        calculationDiv.textContent = getDateTime() + "Error! Missing One Or More Operands!";
    } else {
        calculationDiv.style.backgroundColor = formList[3].value;
        var num1 = formList[0].valueAsNumber;
        var num2 = formList[2].valueAsNumber;
        var sign = formList[1].value;
        switch (sign) {
            case "add":
                parag = add(num1, num2);
                break;
            case "sub":
                parag = sub(num1,num2);
                break;
            case "mult":
                parag = mult(num1, num2);
                break;
            case "div":
                parag = divide(num1, num2);
                break;
            case "mod":
                parag = mod(num1, num2);
                break;
            case "exp":
                parag = exp(num1, num2);
                break;
        }
        calculationDiv.appendChild(parag);
    }
    calculationDiv.addEventListener('click', function (event) {
        calculationDiv.remove();
    });

    if (document.body.getElementsByClassName("stuff-box").length > 1) {
        document.body.insertBefore(calculationDiv, document.body.getElementsByClassName("stuff-box")[1]);
    } else {
        document.body.appendChild(calculationDiv);
    }
}


var headingElement = document.createElement("h1");
headingElement.className = "shadowed";
var headText = document.createTextNode("JavaScript Calculator");
headingElement.appendChild(headText);

var subHeadingElement = document.createElement("h3");
subHeadingElement.className = "shadowed";
var subHeadText = document.createTextNode("Create an Expression:");
subHeadingElement.appendChild(subHeadText);

var mainDiv = document.createElement("div");
mainDiv.className = "stuff-box";
mainDiv.style.backgroundColor = "grey";

mainDiv.appendChild(headingElement);
mainDiv.appendChild(subHeadingElement);
mainDiv.appendChild(calculatorForm);
mainDiv.appendChild(calcButton);
document.body.appendChild(mainDiv);
