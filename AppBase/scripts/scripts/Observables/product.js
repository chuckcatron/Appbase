///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Product = (function (_super) {
    __extends(Product, _super);
    function Product() {
        _super.call(this);
        this.appData = new Data();
        _super.prototype.init.call(this, this);
    }
    Product.prototype.load = function () {
        var d = $.Deferred();
        this.appData.productDataSource.read().then(function () {
            d.resolve("products");
        });
        return d.promise();
    };
    Product.prototype.fetch = function (productId) {
        return this.appData.productDataSource.get(productId);
    };
    return Product;
}(kendo.Observable));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Observables/product.js.map