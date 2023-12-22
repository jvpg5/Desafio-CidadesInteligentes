const CalcularMetadados = require('./Desafio');

test('"urewur88rere0rew" corresponde a coordenada 8 + 0 = 8', () => {
  expect(CalcularMetadados("urewur88rere0rew")).toBe(8);
});

test('"ur234324ur88rere0rew" corresponde a coordenada 2 + 0 = 2', () => {
    expect(CalcularMetadados("ur234324ur88rere0rew")).toBe(2);
});

test('"sdsadar4ew" corresponde a coordenada 4 + 4 = 8', () => {
    expect(CalcularMetadados("sdsadar4ew")).toBe(8);
});

test('"sdsew" Não tem digitos', () => {
    try{
        CalcularMetadados("sdsew");
    }catch(e){
        expect(e.message).toBe("ERRO: Não tem dígito na string!")
    }
});