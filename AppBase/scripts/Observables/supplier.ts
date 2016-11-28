///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
class supplier extends kendo.data.ObservableObject{
    application = new application();
    main: main = this.application.main;
    Supplier: Supplier = this.main.supplier.Supplier;
    load = () => {
        var self = this;
        var d = $.Deferred();
        self.main.supplierDS.read().then(function () {
            d.resolve("suppliers");
        });
        return d.promise();
    }

    fetch = (supplierId) => {
        var self = this;
        return self.main.supplierDS.get(supplierId);
    }

    constructor() {
        super();
        super.init();
    }
}