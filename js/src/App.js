var Texto = function(){
    this.contenido = ko.observable('');
    this.numLetras = ko.observable(0);
    this.numPalabras = ko.observable(0);
};

var ViewModel = function(){
    var self = this;
    this.texto = ko.observable(new Texto);
    this.funciones = new Funciones();
    
    this.setValoresTexto = function(){
        var textArea = $('textarea').val();
        self.texto().contenido(textArea);
        self.texto().numLetras(self.funciones.contarLetras(textArea))
        self.texto().numPalabras(self.funciones.contarPalabras(textArea));
        
    };
    this.showValores = function(){
        self.setValoresTexto();
        var numPalabras = $('#num-palabras');
        var numLetras = $('#num-letras');
        numPalabras.text('Numero de palabras: ' + self.texto().numPalabras());
        numLetras.text('Numero de letras: ' + self.texto().numLetras());
        self.mostrarRepetidas();
    }

    this.limpiar = function(){
        document.querySelector('textarea').value = '';
        self.showValores()
    };

    this.toggleCorreccion = function(){
        var textArea = document.querySelector('textarea');
        if(textArea.spellcheck == true){
            textArea.spellcheck = false;
        }else if(textArea.spellcheck == false){
            textArea.spellcheck = true;
        }
    };

    this.mostrarRepetidas = function () {
        var repetidas = self.funciones.calcularRepetidas(self.texto().contenido());
        var contenido = self.texto().contenido();
        for(var i = 0; i<repetidas.length; i++){
            var pos = 0;
            var currentWord = repetidas[i];
            for(var j = 0; j<contenido.length; j++){
                if(currentWord[0] === contenido[j]){
                    var esIgual = true;
                    for(var k = 0; k<currentWord.length;k++ ){
                            
                    }
                }
            }
        }
        console.log(repetidas);
    }


};
ko.applyBindings(new ViewModel)