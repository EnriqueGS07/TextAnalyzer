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
        var listaContenido = self.texto().contenido().split(" ");
        var posiciones = [];
        for(let currentWord of repetidas){
            for(var i = 0; i<listaContenido.length;i++){
                if(currentWord === listaContenido[i]){
                    posiciones.push(i)
                }
            }
        }
        var agregadas = 0;
        for(let i = 0; i<posiciones.length;i++){
            listaContenido.splice(posiciones[i]+agregadas+1,0,"</span>")
            listaContenido.splice(posiciones[i]+agregadas,0,"<span class=\"subrayada\">")
            agregadas+=2;
            console.log(listaContenido);
        }
        var textArea = $('textarea');
        textArea.html = listaContenido.join(" ");
    }


};
ko.applyBindings(new ViewModel)