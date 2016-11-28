var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
var application = (function (_super) {
    __extends(application, _super);
    function application() {
        var _this = this;
        _super.apply(this, arguments);
        //mainObservable wraps all the observables up into one base object
        this.main = new main();
        this.common = new Common();
        this.appData = this.main.appData;
        this.View = "";
        this.Model = "";
        this.load = function (page, id) {
            var self = _this;
            loader.show();
            var path = page;
            path = self.common.validData(id) ? path + "/" + id : path;
            switch (page) {
                case "home":
                    self.set("Model", self.main);
                    break;
                case "orderlist":
                case "orderedit":
                    if (self.common.validData(id)) {
                        self.main.order.fetch(id);
                    }
                    self.set("Model", self.main.order);
                    break;
                case "shipperlist":
                case "shipperedit":
                    if (self.common.validData(id)) {
                        self.main.shipper.fetch(id);
                    }
                    self.set("Model", self.main.shipper);
                    break;
                default:
                    break;
            }
            $.when(self.getPage(page))
                .done(function () {
                kendo.unbind("#main-layout");
                kendo.destroy("#main-layout");
                $("#main-layout").html("");
                self.loadComplete(path, id);
            });
        };
        this.getPage = function (page) {
            var self = _this;
            var d = $.Deferred();
            self.set("View", null);
            self.buildView(page).done(function () {
                d.resolve();
            });
            return d.promise();
        };
        this.buildView = function (view) {
            var self = _this;
            var d = $.Deferred(), url = "Templates/Pages/" + view + ".html";
            self.loadPage(url).done(function (data) {
                self.set("View", new kendo.View(data));
                d.resolve();
            });
            return d.promise();
        };
        this.loadComplete = function (path, model) {
            var self = _this;
            layout.showIn("#main-layout", self.get("View"));
            kendo.bind("#main-layout", self.get("Model"));
            router.navigate(path, true);
            self.common.adjust();
        };
        this.loadPage = function (url) {
            var d = $.Deferred();
            $.ajax({ url: url, cache: false })
                .done(function (data) {
                d.resolve(data);
            })
                .fail(function (error) {
                alert(error.message + url);
                d.reject(error);
            });
            return d.promise();
        };
        this.loadSection = function (section) {
            var d = $.Deferred();
            var url = "Templates/Parts/" + section + ".html";
            $.ajax({ url: url, cache: false })
                .done(function (data) {
                d.resolve(data);
            })
                .fail(function (error) {
                alert(error.message + url);
                d.reject();
            });
            return d.promise();
        };
        this.navbarClick = function () {
        };
        this.buildNav = function () {
            var self = _this;
            var d = $.Deferred();
            //define the navigationView and show it in the layout template
            $.ajax({ url: "Templates/navigation.html", cache: false })
                .done(function (template) {
                var navigationView = new kendo.View(template, { model: self });
                layout.showIn("#navigation-layout", navigationView);
                d.resolve();
            });
            return d.promise();
            ;
        };
        this.loadNoAccess = function () {
            loader.show();
            $.ajax({ url: 'Templates/Pages/noaccess.html', cache: false })
                .done(function (template) {
                layout.showIn("#main-layout", new kendo.View(template));
            })
                .always(function () {
                loader.hide();
            });
        };
    }
    return application;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/application.js.map