/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/kendo-ui/kendo-ui.d.ts" />
///<reference path="scripts/typings/toastr/toastr.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layout, router, connectionId, loader;
$(function () {
    loader = new Loader();
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
});
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        _super.prototype.init.call(this, this);
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
    return Main;
}(kendo.Observable));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/app.js.map