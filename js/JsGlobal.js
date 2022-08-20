
function header(){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) { // 140 é a distancia que vc rola antes da logo sumir
        //$(".header").fadeOut();
        $('header').css('background-color', '#ff66c4');
        $('h1').css('color', '#fff');

      } else {
        //$(".header").fadeIn();
        $('header').css('background-color', '#fff');
        $('h1').css('color', '#000');
      }
    });
}

function enterBloqueadoNoInput(){
	  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
}

async function imprimir(){
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>Impressão de Etiquetas</title>');
  printWindow.document.write('<style>');

  printWindow.document.write('.negrito{font-weight: bold;}');
  printWindow.document.write('.nameTitle{font-family: Arial;font-size: 150%;margin: 2%;}');
  printWindow.document.write('.gridPrint{display: grid;grid-template-columns: 50% 50%;padding-bottom: 2%;}');
  printWindow.document.write('fieldset{min-width: 0;padding: 0;margin: 0;border: solid;margin-left: 2%;}');
  printWindow.document.write('.divEtiqueta{padding-left: 4%;padding-bottom: 2%;}');
  printWindow.document.write('img{width: 50%;padding-left: 25%;}');

  printWindow.document.write('</style>');

  printWindow.document.write('</head><body>');
  var etiqueta1 = $("#etiqueta1").html();
  var etiqueta2 = $("#etiqueta2").html();
  var etiqueta3 = $("#etiqueta3").html();
  var etiqueta4 = $("#etiqueta4").html();
  await printWindow.document.write(etiqueta1);

  if(nomeRemetenteDois && nomeDestinatarioDois &&
    cidadeRemetenteDois && cidadeDestinatarioDois &&
    ufRemetenteDois && ufDestinatarioDois &&
    cepRemetenteDois && cepDestinatarioDois){
    await printWindow.document.write(etiqueta2);
  }

  if(nomeRemetenteTres != '' && nomeRemetenteTres != null && nomeDestinatarioTres != '' && nomeDestinatarioTres != null &&
    cidadeRemetenteTres != '' && cidadeRemetenteTres != null && cidadeDestinatarioTres != '' && cidadeDestinatarioTres != null &&
    ufRemetenteTres && ufDestinatarioTres &&
    cepRemetenteTres && cepDestinatarioTres){
    await printWindow.document.write(etiqueta3);
  }

  if(nomeRemetenteQuatro && nomeDestinatarioQuatro &&
    cidadeRemetenteQuatro && cidadeDestinatarioQuatro &&
    ufRemetenteQuatro && ufDestinatarioQuatro &&
    cepRemetenteQuatro && cepDestinatarioQuatro){
    await printWindow.document.write(etiqueta4);
  }

  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

function fechar(){
  console.log('fechar!');
  window.close();
}

function fecharAposImprimir(){
  console.log('fecharAposImprimir!');
  window.onafterprint = fechar;
}