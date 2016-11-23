/// <reference path="typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />

class Loader extends kendo.data.ObservableObject {
    docHeight;

    init(){
        $("body").append("<div id='overlay'></div>");
        var loader = $("#overlay");
        loader.css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        });
    }

    show() {
        var loader = $("#overlay");
        loader.height(this.get("docHeight"));
        loader.show();
        kendo.ui.progress($("#overlay"), true);
    }

    hide() {
        var loader = $("overlay");
        setTimeout(() => {
            kendo.ui.progress($("#overlay"), false);
            loader.hide();
        }, 500);
    }

    constructor() {
        super();
        super.init(this);
        this.set("docHeight", $(document).height());
    }
}