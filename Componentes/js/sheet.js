const urlSheet = 'https://script.google.com/macros/s/AKfycbx--mrrsiIAYLHj9e8lnNGC7cwawA3HXn-tCF6-mqm5Ti-_ulYZ7_n16W7tXolciDQXfQ/exec'
const dadosDrinks = document.getElementById('carregaDados');
function sheet(aba){
    var urlSheetParam = urlSheet + "?aba="+ aba;
    fetch(urlSheetParam)
    .then((response) => response.json())
    .then((data) => {
        
        
        insertData(data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
function insertData(objDados){
    let arrayHtml = [];
    let dadosHtml = objDados;
    for(var d=0; d < dadosHtml.length; d++){
        var html = objDados[d];
        var ingredientesReplace = html.ingrediente;
        var ingre = ingredientesReplace.toString().replace(/,/g, "<br/>");
        
        var htmlOBJ = {
            Drink : html.drink,
            Ingredientes : ingre,
            Foto : html.foto
        };
        console.log(ingre);
        var insertDataHtml = '<h2><div class="loc">'
        +'<img src="Componentes/images/sexonthebeach_.jpg" alt=""><p><span>'+
        htmlOBJ.Drink+'<br/></span>'+ htmlOBJ.Ingredientes 
        +'<br/><a href="?nav=sobre">Conheça nossos Drinks!</a></p></div></h2>';
        arrayHtml.push(insertDataHtml);
    }
    console.log(arrayHtml);
    dadosDrinks.innerHTML = arrayHtml;
}