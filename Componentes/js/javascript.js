const urlSheet = 'https://script.google.com/macros/s/AKfycbx--mrrsiIAYLHj9e8lnNGC7cwawA3HXn-tCF6-mqm5Ti-_ulYZ7_n16W7tXolciDQXfQ/exec'
const urlSheeet = 'https://sauhuahjkfkgldf.br.net';
function showDivElement(divShow, dia){
    //alert(divShow);
    
    
    if(dia){
        //console.log("divshow: "+divShow+"- dia: "+dia);
        
        sheet('Data', dia);
    }
    
    let kkk = document.getElementsByClassName("evento-div");
    let divToShow = document.getElementsByClassName(divShow);
    
    for(var i=0; i < divToShow.length; i++){
        
        if(divToShow[i].style.display =="flex"){
            divToShow[i].style.display = 'none';
            if(document.getElementById(divShow+divShow+divShow)){
                document.getElementById(divShow+divShow+divShow).style.background = 'none';
                document.getElementById(divShow+divShow+divShow).style.color = '#FFF';
            }
        }else{
            divToShow[i].style.display = 'flex';
            if(document.getElementById(divShow+divShow+divShow)){
                document.getElementById(divShow+divShow+divShow).style.background = 'rgb(209, 178, 1)';
                document.getElementById(divShow+divShow+divShow).style.color = 'black';
            }
            
        }
        
    }
    for(var k=0; k < kkk.length; k++){
        if(kkk[k].style.display =="flex"){
            var kkkK = kkk[k].className;
            if(kkk[k].className == kkkK){
                var mykkk = kkk[k].classList[1];
            }
            if(mykkk != divShow){
                var vaRA = document.getElementsByClassName(mykkk);
                    kkk[k].style.display = 'none';
                    document.getElementById(mykkk+mykkk+mykkk).style.background = 'none';
                    document.getElementById(mykkk+mykkk+mykkk).style.color = '#FFF';
            }
        }
    }
}
function sheet(aba, dia){
    var sheetVar = aba;
    var urlSheetParam = urlSheet + "?aba="+ aba;
    
    fetch(urlSheetParam)
    .then((response) => response.json())
    .then((data) => {
        
        
        insertData(data, sheetVar, dia);
        
    })
    .catch(function (error) {
        var errorExeec = '<p>Erro na Conexão com o "Banco de Dados"<p/><p>Tente novamente mais tarde</p>';
      console.log(error);
      document.getElementById("chama").innerHTML ="<h1>Cheers Irish Pub</h1><div class='loc'><span>"+ errorExeec +"</span></div>";
    });

}
function insertData(objDados, plan, dia){

    var arrayHtml = [];
    var dadosHtml = objDados;
    if(plan == "drinks"){
        for(var d=0; d < dadosHtml.length; d++){
            var html = objDados[d];
            
            var ingredientesReplace = html.ingrediente;
            var ingre = ingredientesReplace.toString().replace(/,/g, ";<p/>");
            const drinksLoad = document.getElementById("drinks-load");
            drinksLoad.innerHTML += `
            <div class="loc">
                <img id="xxx" src="`+dadosHtml[d].foto+`" alt="`+dadosHtml[d].drink+`">                
                <div class="uls" id="uls">
                    <h2>`+dadosHtml[d].drink+`</h2>
                    <p>`+ingre+`</p>
                </div>
            </div>
            `;


        }

        
    }if(plan =="Data"){
        for(var b=0; b < dadosHtml.length; b++){
            
            htmlData = objDados[b];
            htmlObjData = {
                Dia : htmlData.data,
                Banda : htmlData.banda,
                Descricao : htmlData.descricao,
                Foto : htmlData.imagem
            };
            
            arrayHtml.push(htmlObjData);
            
            
            if(dia =="Terça Feira"){
                var ulsDados = 'ter';
                
            }
            if(dia =="Quarta Feira"){
                var ulsDados = 'qua';
            }
            if(dia =="Quinta Feira"){
                var ulsDados = 'qui';
            }
            if(dia =="Sexta Feira"){
                var ulsDados = 'sex';
            }
            if(dia =="Sábado"){
                var ulsDados = 'sab';
            }
            if(dia =="Domingo"){
                var ulsDados = 'dom';
            }
            const uDados = ulsDados;
            document.getElementById(uDados).innerHTML = '';
            var imgChange = document.getElementById(ulsDados+ulsDados);
            //console.log(imgChange);
            imgChange.setAttribute('src', htmlData['imagem']);
            
            document.getElementById(ulsDados).innerHTML = "<h2>"+htmlData['banda']+"<h2/>";
            document.getElementById(ulsDados).innerHTML += "<p><a href='#xis'>"+htmlData['descricao']+"</a></p>"
            
            //uls.innerHTML = "<li>"+htmlData['data']+"</li>";
            if(htmlData.data ==dia){
                //console.log(htmlData);
                break;
            }
        }
    } 
}