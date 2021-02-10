$(function(){

  

    $("a").click(function(event){
        event.preventDefault();

        if (this.hash) {
            

            var gatito = this.hash;

            $("html, body").animate({

                scrollTop: $(gatito).offset().top
            });



        }


    });


});