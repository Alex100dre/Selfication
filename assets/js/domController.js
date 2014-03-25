app.domController = {

    generateCadre: function(imgUrl){
        $('.cadre').remove();
        $('#cCamera').prepend('<img id="large cadre" src='+imgUrl+' />');
    }

};