
$.ajax({
  type: "POST",
  url: '/rota',
  data: JSON.stringify({x:0}),
  contentType: "application/json",
  dataType: "json",
}).done(function (retorno){
    
});

/////////////
///// Ideia 2

function frontend_to_backend(){
    return $.ajax({
         url: '/',
         type: 'POST',
         contentType: 'application/json',
     }).done(function (retorno){
         return retorno.dados
     })
}

// Usabilidade
frontend_to_backend().then(function (dados) {
    console.log(dados);
})

