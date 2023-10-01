const urlSheet =
  "https://script.google.com/macros/s/AKfycbx--mrrsiIAYLHj9e8lnNGC7cwawA3HXn-tCF6-mqm5Ti-_ulYZ7_n16W7tXolciDQXfQ/exec";
const urlSheeet = "https://sauhuahjkfkgldf.br.net";
function showDivElement(divShow, dia) {
  //alert(divShow);

  if (dia) {
    //console.log("divshow: "+divShow+"- dia: "+dia);

    sheet("Data", dia);
  }

  let kkk = document.getElementsByClassName("evento-div");
  let divToShow = document.getElementsByClassName(divShow);

  for (var i = 0; i < divToShow.length; i++) {
    if (divToShow[i].style.display == "flex") {
      divToShow[i].style.display = "none";
      if (document.getElementById(divShow + divShow + divShow)) {
        document.getElementById(divShow + divShow + divShow).style.background =
          "none";
        document.getElementById(divShow + divShow + divShow).style.color =
          "#FFF";
      }
    } else {
      divToShow[i].style.display = "flex";
      if (document.getElementById(divShow + divShow + divShow)) {
        document.getElementById(divShow + divShow + divShow).style.background =
          "rgb(209, 178, 1)";
        document.getElementById(divShow + divShow + divShow).style.color =
          "black";
      }
    }
  }
  for (var k = 0; k < kkk.length; k++) {
    if (kkk[k].style.display == "flex") {
      var kkkK = kkk[k].className;
      if (kkk[k].className == kkkK) {
        var mykkk = kkk[k].classList[1];
      }
      if (mykkk != divShow) {
        var vaRA = document.getElementsByClassName(mykkk);
        kkk[k].style.display = "none";
        document.getElementById(mykkk + mykkk + mykkk).style.background =
          "none";
        document.getElementById(mykkk + mykkk + mykkk).style.color = "#FFF";
      }
    }
  }
}
function sheet(aba, dia) {
  var sheetVar = aba;
  var urlSheetParam = urlSheet + "?aba=" + aba;

  fetch(urlSheetParam)
    .then((response) => response.json())
    .then((data) => {
      insertData(data, sheetVar, dia);
    })
    .catch(function (error) {
      var errorExeec =
        '<p>Erro na Conexão com o "Banco de Dados"<p/><p>Tente novamente mais tarde</p>';
      console.log(error);
      document.getElementById("chama").innerHTML =
        "<h1>Cheers Irish Pub</h1><div class='loc'><span>" +
        errorExeec +
        "</span></div>";
    });
}
function insertData(objDados, plan, dia) {
  var arrayHtml = [];
  var dadosHtml = objDados;
  if (plan == "drinks") {
    for (var d = 0; d < dadosHtml.length; d++) {
      var html = objDados[d];

      var ingredientesReplace = html.ingrediente;
      var ingre = ingredientesReplace.toString().replace(/,/g, ";<p/>");
      const drinksLoad = document.getElementById("drinks-load");
      drinksLoad.innerHTML +=
        `
            <div class="loc">
                <img id="xxx" src="` +
        dadosHtml[d].foto +
        `" alt="` +
        dadosHtml[d].drink +
        `">                
                <div class="uls" id="uls">
                    <h2>` +
        dadosHtml[d].drink +
        `</h2>
                    <p>` +
        ingre +
        `</p>
                </div>
            </div>
            `;
    }
  }
  if (plan == "Data") {
    for (var b = 0; b < dadosHtml.length; b++) {
      htmlData = objDados[b];
      
    
      if (dia == "Terça Feira") {
        var ulsDados = "ter";
      }
      if (dia == "Quarta Feira") {
        var ulsDados = "qua";
      }
      if (dia == "Quinta Feira") {
        var ulsDados = "qui";
      }
      if (dia == "Sexta Feira") {
        var ulsDados = "sex";
      }
      if (dia == "Sábado") {
        var ulsDados = "sab";
      }
      if (dia == "Domingo") {
        var ulsDados = "dom";
      }
      const uDados = ulsDados;
      document.getElementById(uDados).innerHTML = "";
      var divChange = document.getElementById(uDados);
      divChange.setAttribute("onclick", "openDialog('"+htmlData["imagem"]+"')");
      var imgChange = document.getElementById(ulsDados + ulsDados);
      //console.log(imgChange);
      imgChange.setAttribute("src", htmlData["imagem"]);

      document.getElementById(ulsDados).innerHTML =
        "<h2>" + htmlData["banda"] + "<h2/>";
      document.getElementById(ulsDados).innerHTML +=
        "<p><a href='#xis'>" + htmlData["descricao"] + "</a></p>";
        if (htmlData.data == dia) {
            break;
        }if(htmlData != dia){
            document.getElementById(uDados).innerHTML = "<h2>Evento não cadastrado</h2>";
            imgChange.setAttribute("src", "./Componentes/images/logocip_inside.png");
            
        }

      //uls.innerHTML = "<li>"+htmlData['data']+"</li>";

    }
  }
}
function openModal(agr){
    const divByModal = document.getElementById('showModal');
    if(agr =="limpar"){
        divByModal.style.display = "none";
        divByModal.style.opacity = "0";
        document.getElementById('showModal').innerHTML = '<img src="Componentes/images/logocip_inside.png" alt="Logo">';
        
    }else{
    const imgModal = document.querySelector('#showModal').children[0];
    imgModal.setAttribute("src", agr);
    
    document.getElementById('showModal').innerHTML += "<h3>"+"<button onclick=openModal('limpar')>Banda Sei Lá Eu!!!</button><h3>";
    divByModal.style.display = "flex";
    divByModal.style.opacity = "1";
    //console.log(divByModal);
    }
}
function openDialog(agr){
    const dialogModal = document.querySelector("dialog");
    const divDialog = document.getElementById('showModalDialog');
    const imgModal = document.querySelector('#showModalDialog').children[0];
    if(agr =="clear") { 
        dialogModal.close(); 
        divDialog.innerHTML = '<img src="Componentes/images/logocip_inside.png" alt="Logo">';
    }else{
        imgModal.setAttribute("src", agr);
        divDialog.innerHTML += "<h3>"+"<button onclick=openDialog('clear')>Banda Sei Lá Eu!!!</button><h3>";
        dialogModal.showModal();
    }
}