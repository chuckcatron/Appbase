/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gridLoader = (function (_super) {
    __extends(gridLoader, _super);
    function gridLoader() {
        var _this = this;
        _super.call(this);
        this.docHeight = $("#rebatesGrid").height();
        this.initialize = function () {
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
        };
        this.show = function () {
            $("#gridoverlay").remove();
            _this.init();
            var loader = $("#gridoverlay");
            loader.height($("#rebatesGrid").height());
            loader.show();
            kendo.ui.progress($("#gridoverlay"), true);
        };
        this.hide = function () {
            var loader = $("#gridoverlay");
            //setTimeout(function () {
            //    loader.hide();
            //}, 500);
            setTimeout(function () {
                kendo.ui.progress($("#gridoverlay"), false);
                loader.hide();
            }, 500);
        };
        _super.prototype.init.call(this, this);
    }
    return gridLoader;
}(kendo.Observable));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/gridloader.js.map