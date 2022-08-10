class Funciones {
    contarPalabras = function(string){
        var list = string.split(' ');
        var contador = 0;
        for(var i=0;i<list.length; i++){
            if(list[i] !== ''){
                contador+=1;
            };
        };
        return contador;
    }

    contarLetras = function(string){
        var contador = 0;
        for(var i=0;i<string.length; i++){
            if(/^[!-■]$/i.test(string[i])){
                contador+=1;
            };
        };
        return contador;
    };
}