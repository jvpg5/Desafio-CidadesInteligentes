const metadados =  require("./entrada.json");

function CalcularMetadados(metadado){
  let primeiroDigito, ultimoDigito;

  try{
  for(let i = 0; i < metadado.length; i++){
    if(!isNaN(metadado[i])){
      primeiroDigito = Number(metadado[i]);
      break;
    }
  }

  if(primeiroDigito == null) throw "ERRO: Não tem dígito na string!";

  for(let i = metadado.length-1; i >= 0; i--){
    if(!isNaN(metadado[i])){
      ultimoDigito = Number(metadado[i]);
      break;
    }
  }

  

  return primeiroDigito + ultimoDigito;

  }catch (e) {
    throw e;
  }
}

module.exports = CalcularMetadados;

metadados.forEach((metadado)=> {
  
  try{
    console.log(`"${metadado}" corresponde as cordenadas `+ CalcularMetadados(metadado));
  }catch(e){
    console.log(`"${metadado}" metadado inválido! -- ${e}`);
  }

});

