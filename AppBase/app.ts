/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/kendo-ui/kendo-ui.d.ts" />
///<reference path="scripts/typings/toastr/toastr.d.ts"/>

var layout, router, connectionId, loader;

$(() => {
    loader = new Loader();
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
});

class Main extends kendo.Observable {

    constructor() {
        super();
        super.init(this);
        toastr.options.progressBar = true;
        toastr.options.positionClass = "toast-bottom-right";
        toastr.options.preventDuplicates = false;
        toastr.options.showDuration = 400;
        toastr.options.hideDuration = 1000;
        toastr.options.timeOut = 6000;
        toastr.options.extendedTimeOut = 6000;
        toastr.options.showEasing = "swing";
        toastr.options.hideEasing = "linear";
        toastr.options.showMethod = "fadeIn";
        toastr.options.hideMethod = "fadeOut";
    }
}