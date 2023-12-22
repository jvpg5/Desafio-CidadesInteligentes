//let metadados = ["urewur88rere0rew", "ur234324ur88rere0rew", "sdsadar4ew"];

function CalcularMetadados(metadado){
  let primeiroDigito, ultimoDigito;

  try{
  for(let i = 0; i < metadado.length; i++){
    if(!isNaN(metadado[i])){
      primeiroDigito = Number(metadado[i]);
      break;
    }
  }

  for(let i = metadado.length-1; i >= 0; i--){
    if(!isNaN(metadado[i])){
      ultimoDigito = Number(metadado[i]);
      break;
    }
  }

  if(primeiroDigito == null) throw "ERRO: Não tem dígito na string!";

  return primeiroDigito + ultimoDigito;

  }catch (e) {
    throw e;
  }
}

module.exports = CalcularMetadados;

//metadados.forEach((metadado)=> console.log(CalcularMetadados(metadado)));

