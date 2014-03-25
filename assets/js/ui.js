app.ui = {

    initStream: function(){
        this.gridToDom();
    },
    initUpload: function(){
        this.gridToCanvas();
    },

    gridToCanvas: function(){
        // var that = this;
        $("body").on('click', '.thumbnail', function(event) {
            event.preventDefault();
            var imgUrl = $(this).attr('data-url');
            
            app.canvas.generateCadre(imgUrl);
            // au clic on appel la fonction generateCadre avec l'url de l'image en parametre 
        });
    },
    gridToDom: function(){
        // var that = this;
        $("body").on('click', '.thumbnail', function(event) {
            event.preventDefault();
            var imgUrl = $(this).attr('data-url');
            app.domController.generateCadre(imgUrl);
            // au clic on appel la fonction generateCadre avec l'url de l'image en parametre 
        });
    }

};