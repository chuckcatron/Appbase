/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

class gridLoader extends kendo.Observable{
    docHeight = $("#rebatesGrid").height();
    initialize = () => {
        $("body").append("<div id='gridoverlay'></div>");
        var loader = $("#gridoverlay");
        loader.height($("#rebatesGrid").height())
            .css({
                'opacity': 0.05,
                'position': 'fixed',
                'top': 0,
                'left': $(".sidebar").width(),
                'background-color': 'black',
                'width': $("#rebatesGrid").width() + 100,
                'z-index': 5000,
                'margin': '0 auto',
                'padding-top': '15em'
            });
    }

    show= () => {
        $("#gridoverlay").remove();
        this.init();
        var loader = $("#gridoverlay");
        loader.height($("#rebatesGrid").height());
        loader.show();
        kendo.ui.progress($("#gridoverlay"), true);
    }

    hide = () => {
        var loader = $("#gridoverlay");
        //setTimeout(function () {
        //    loader.hide();
        //}, 500);
        setTimeout(function () {
            kendo.ui.progress($("#gridoverlay"), false);
            loader.hide();
        }, 500);
    }
    
    constructor() {
        super();
        super.init(this);
    }
}