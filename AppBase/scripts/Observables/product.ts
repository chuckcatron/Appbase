///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>

class product extends kendo.Observable{
    appData = new Data();
    load() {
        var d = $.Deferred();
        this.appData.productDataSource.read().then(() => {
            d.resolve("products");
        });
        return d.promise();
    }
    fetch(productId) {
        return this.appData.productDataSource.get(productId);
    }

    constructor() {
        super();
        super.init(this);
    }
}