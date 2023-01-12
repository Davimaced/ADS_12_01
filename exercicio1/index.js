function mediadalista (lista)  {
    var  numero = lista.length;
    var soma = 0;
    for (var i = 0; i < numero; i++){
        soma += lista[i];
         
    }
    return soma / numero;
}

var lista = [1,3,9,15,90];
var media = mediadalista(lista);
console.log ("a media da lista é:",media); 