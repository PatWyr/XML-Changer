
var chooseBtn=document.createElement("button");
var div = document.getElementById("maindiv");
var xmlDoc;
var filename ="";

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");
customBtn.addEventListener("click", function(){
    realFileBtn.click();
});

const saveBtn = document.getElementById("save-button");
saveBtn.addEventListener("click",function(){
    saveFile();

})

realFileBtn.addEventListener("change", function(){
    if(realFileBtn.value) {
        var path = customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        xmlDoc=readFile(path);
        show();
    } else{
        customTxt.innerHTML =" Nie wybrano pliku";
    }
});


function chooseFunction() {
    console.log("Czekam na filename");
    var inf = prompt("Please enter XML name");
      
      filename=inf;
      console.log(filename);
      readFile(filename);
  }

function readFile(filename) {
    if (window.XMLHttpRequest)
    {
    xmlhttp=new XMLHttpRequest();
    }
    else
    {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",filename,false);
    xmlhttp.send();
    return xmlhttp.responseXML;

    
}

function show() {
    var Samochod = xmlDoc.getElementsByTagName("Samochod");
    for(i=0;i<Samochod.length;i++){
        let id = i;
        var editBtn=document.createElement("button");
        var deleteBtn=document.createElement("button");
        editBtn.innerHTML="Edit";
        deleteBtn.innerHTML="Delete";
        var divSamochod=document.createElement("div");
        divSamochod.className="car";
        editBtn.className="button";
        deleteBtn.className="button";
        divSamochod.appendChild(editBtn);
        divSamochod.appendChild(deleteBtn);
        editBtn.addEventListener("click",function(){
            editCar(id);
        });
        deleteBtn.addEventListener("click",function(){
            deleteCar(id);
        })
        var Marka = document.createElement("p");
        Marka.innerHTML=Samochod[i].getElementsByTagName("Marka")[0].childNodes[0].nodeValue;
        div.appendChild(divSamochod);
        divSamochod.appendChild(Marka);
        var Model = document.createElement("p");
        Model.innerHTML=Samochod[i].getElementsByTagName("Model")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(Model);
        var Cena = document.createElement("p");
        Cena.innerHTML=Samochod[i].getElementsByTagName("Cena")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(Cena);
        var Uwagi = document.createElement("p");
        Uwagi.innerHTML=Samochod[i].getElementsByTagName("Uwagi")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(Uwagi);
        var Data = document.createElement("p");
        Data.innerHTML=Samochod[i].getElementsByTagName("Data_produkcji")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(Data);
        var HP = document.createElement("p");
        HP.innerHTML=Samochod[i].getElementsByTagName("HP")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(HP);
        var Ocena = document.createElement("p");
        Ocena.innerHTML=Samochod[i].getElementsByTagName("Ocena")[0].childNodes[0].nodeValue;
        divSamochod.appendChild(Ocena);

    }
    valid();
    console.log("Pokazano plik");

}

function deleteCar(id){
    console.log("Usuwam");
    z=xmlDoc.getElementsByTagName("Samochod")[id];
    z.parentNode.removeChild(z);
    console.log(xmlDoc);
    update();

}

function editCar(id){
    console.log("Edytuje");
    var inf = prompt("Please enter what you want to edit");
    if(inf === "Marka"){
        console.log("edytuje marke")        
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Marka")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    } else if(inf === "Model"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Model")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);
        
    }else if(inf==="Cena"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Cena")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    }else if(inf==="Rok_produkcji"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Rok_produkcji")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    }else if(inf === "HP"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("HP")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    }else if(inf ==="Uwagi"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Uwagi")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    }else if(inf ==="Ocena"){
        inf = prompt("New: ");
        y=xmlDoc.getElementsByTagName("Samochod")[id];
        xmlDoc.getElementsByTagName("Ocena")[0].childNodes[0].nodeValue =inf;
        console.log(xmlDoc);

    }


    update();

}

function addCar(){
    console.log("Dodaje");
    newElement = xmlDoc.createElement("Samochod");
    x = xmlDoc.getElementsByTagName("Samochody")[0];
    x.appendChild(newElement);
    marka = xmlDoc.createElement("Marka");
    var inf = prompt("Please enter Car Brand");
    newText=xmlDoc.createTextNode(inf);
    marka.appendChild(newText);
    newElement.appendChild(marka);
    model = xmlDoc.createElement("Model");
    inf=prompt("Please enter Car Model");
    newText=xmlDoc.createTextNode(inf);
    model.appendChild(newText);
    newElement.appendChild(model);
    cena = xmlDoc.createElement("Cena");
    inf=prompt("Please enter Car Price");
    newText=xmlDoc.createTextNode(inf);
    cena.appendChild(newText);
    newElement.appendChild(cena);
    uwagi = xmlDoc.createElement("Uwagi");
    inf=prompt("Please enter Car Notes");
    newText=xmlDoc.createTextNode(inf);
    uwagi.appendChild(newText);
    newElement.appendChild(uwagi);
    rok = xmlDoc.createElement("Data_produkcji");
    inf=prompt("Please enter Car Production Year");
    newText=xmlDoc.createTextNode(inf);
    rok.appendChild(newText);
    newElement.appendChild(rok);
    hp = xmlDoc.createElement("HP");
    inf=prompt("Please enter Car HP");
    newText=xmlDoc.createTextNode(inf);
    hp.appendChild(newText);
    newElement.appendChild(hp);
    ocena = xmlDoc.createElement("Ocena");
    inf=prompt("Please enter Car Grade");
    newText=xmlDoc.createTextNode(inf);
    ocena.appendChild(newText);
    newElement.appendChild(ocena);
    console.log(xmlDoc);
    clearBox("maindiv");
    update();
}

function update(){    
    console.log("Update w morde jeza");
    clearBox("maindiv");
    show();
}

function clearBox(elementID)
{
    var addBtt=document.createElement("button");
    addBtt.className="button button3";


    addBtt.addEventListener("click",function(){
        addCar();
    })
    addBtt.innerHTML="Add";
    document.getElementById(elementID).innerHTML = "";
    div.appendChild(addBtt);

}

function saveFile(){
    const textToBLOB = new Blob([new XMLSerializer().serializeToString(xmlDoc)], { type: 'text/plain' });
       

        let newLink = document.createElement("a");
        newLink.download = "XML";

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
             document.body.appendChild(newLink);
         }

         newLink.click();

         
}






