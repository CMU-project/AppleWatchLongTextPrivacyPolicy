(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_1 .layoutWrapper:first").overscroll({ showThumbs:false, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);