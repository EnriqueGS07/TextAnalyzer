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

    calcularRepetidas = function (string) {
        var list = string.split(' ');
        var repetidas = new Set();
        console.log(list);
        for (var i = 0; i < list.length; i++) {
            if (list[i] === '') {
                list.splice(0, i);
            }
        }
        console.log(list);
        for (var i = 0; i < list.length; i++) {
            for (var j = i + 1; j < list.length; j++) {
                if (list[i] === list[j]) {
                    repetidas.add(list[i]);
                }
            }
        }
        return repetidas;
    }
}