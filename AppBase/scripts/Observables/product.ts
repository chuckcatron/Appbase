///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>

class product extends kendo.data.ObservableObject{
    application = new application();
    main: main = this.application.main;
    Product: Product = this.application.main.product.Product;

    load = () => {
        var self = this;
        var d = $.Deferred();
        self.main.productDS.read().then(() => {
            d.resolve("products");
        });
        return d.promise();
    }

    fetch = (productId) => {
        var self = this;
        return self.main.productDS.get(productId);
    }

    constructor() {
        super();
        super.init(this);
    }
}