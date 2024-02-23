function organizar_acordo_cabecalho(cabecalho, paraLancar){
  
  // Exemplo de Uso  
  // var cabecalho = cliente_bd.getRange(1, 1, 1, ultimaColuna).getValues()[0]
  // var lista_para_lancar = organizar_acordo_cabecalho(cabecalho, paraLancar)
  
  var lista_para_lancar = []

  cabecalho.forEach(() =>{
    lista_para_lancar.push('')
  })

  for (const [key, value] of Object.entries(paraLancar)) {
    lista_para_lancar[cabecalho.indexOf(key)] = value
  }

  return lista_para_lancar

} 

function acha_maior_ID(nomeDaAba){
  var ss = SpreadsheetApp.getActive() 
  var aba = ss.getSheetByName(nomeDaAba)

  var ultimaLinha = aba.getLastRow() + 1
  var maiorNumero = 0 

  for(var i = 2; i < ultimaLinha;i++){
    if(aba.getRange(i, 1).getValue() > maiorNumero){
      maiorNumero = aba.getRange(i, 1).getValue()
    }
  }

  return maiorNumero + 1

}
