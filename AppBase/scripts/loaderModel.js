/// <reference path="typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        _super.call(this);
        _super.prototype.init.call(this, this);
        this.set("docHeight", $(document).height());
    }
    Loader.prototype.init = function () {
        $("body").append("<div id='overlay'></div>");
        var loader = $("#overlay");
        loader.css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        });
    };
    Loader.prototype.show = function () {
        var loader = $("#overlay");
        loader.height(this.get("docHeight"));
        loader.show();
        kendo.ui.progress($("#overlay"), true);
    };
    Loader.prototype.hide = function () {
        var loader = $("overlay");
        setTimeout(function () {
            kendo.ui.progress($("#overlay"), false);
            loader.hide();
        }, 500);
    };
    return Loader;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/loaderModel.js.map