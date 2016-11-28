///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
class application extends kendo.data.ObservableObject{
    //mainObservable wraps all the observables up into one base object
    main: main = new main();
    common = new Common();
    appData = this.main.appData;

    View = "";
    Model = "";    
    
    load = (page, id?) => {
        var self = this;
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
    }

    getPage = (page) => {
        var self = this;
        var d = $.Deferred();

        self.set("View", null);

        self.buildView(page).done(function () {
            d.resolve();
        });

        return d.promise();
    }

    buildView = (view) => {
        var self = this;
        var d = $.Deferred(),
            url = "Templates/Pages/" + view + ".html";

        self.loadPage(url).done((data: any) => {
            self.set("View", new kendo.View(data));
            d.resolve();
        });
        return d.promise();
    }

    loadComplete = (path, model) => {
        var self = this;
        layout.showIn("#main-layout", self.get("View"));
        kendo.bind("#main-layout", self.get("Model"));
        router.navigate(path, true);
        self.common.adjust();
    }

    loadPage = (url) => {
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
    }

    loadSection = (section) => {
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
    }

    navbarClick = () => {

    }

    buildNav = () => {
        var self = this;
        var d = $.Deferred();
        //define the navigationView and show it in the layout template
        $.ajax({ url: "Templates/navigation.html", cache: false })
            .done(function (template) {
                var navigationView = new kendo.View(template, { model: self });
                layout.showIn("#navigation-layout", navigationView);
                d.resolve();
            });
        return d.promise();;
    }

    loadNoAccess = () => {
        loader.show();
        $.ajax({ url: 'Templates/Pages/noaccess.html', cache: false })
            .done(function (template) {
                layout.showIn("#main-layout", new kendo.View(template));
            })
            .always(function () {
                loader.hide();
            });
    }
}