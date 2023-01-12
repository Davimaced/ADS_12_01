function mediadalista (lista: number[]):number  {
    var  numero: number  = lista.length;
    var soma: number = 0;


    for (let i: number = 0; i < numero; i++){
        soma += lista[i];
        //soma = soma + lista[i] 
    }
    return soma / numero;

}

let lista: number[] = [1,3,9,15,90];
let media : number = mediadalista(lista);
console.log ("a media da lista é:",media); 