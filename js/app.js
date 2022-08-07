var Texto = function(){
    this.contenido = ko.observable('');
    this.numLetras = ko.observable(0);
    this.numPalabras = ko.observable(0);
};

var ViewModel = function(){
    var self = this;
    this.texto = ko.observable(new Texto);
    this.contarPalabras = function(string){
        var list = string.split(' ');
        var contador = 0;
        for(var i=0;i<list.length; i++){
            if(list[i] !== ''){
                contador+=1;
            };
        };
        return contador;
    }

    this.contarLetras = function(string){
        var contador = 0;
        for(var i=0;i<string.length; i++){
            if(/^[!-■]$/i.test(string[i])){
                contador+=1;
            };
        };
        return contador;
    };
    this.setValoresTexto = function(){
        var textArea = $('textarea').val();
        self.texto().contenido(textArea);
        self.texto().numLetras(self.contarLetras(textArea))
        self.texto().numPalabras(self.contarPalabras(textArea));
    };
    this.showValores = function(){
        self.setValoresTexto();
        var numPalabras = $('#num-palabras');
        var numLetras = $('#num-letras');
        numPalabras.text('Numero de palabras: ' + self.texto().numPalabras());
        numLetras.text('Numero de letras: ' + self.texto().numLetras());
    }

    this.limpiar = function(){
        document.querySelector('textarea').value = '';
        self.showValores()
    };

    this.toggleCorreccion = function(){
        var textArea = document.querySelector('textarea');
        console.log(textArea.spellcheck);
        if(textArea.spellcheck == true){
            textArea.spellcheck = false;
        }else if(textArea.spellcheck == false){
            textArea.spellcheck = true;
        }
        console.log("si");
    };

};
ko.applyBindings(new ViewModel)