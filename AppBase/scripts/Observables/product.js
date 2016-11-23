///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var product = (function (_super) {
    __extends(product, _super);
    function product() {
        _super.call(this);
        this.appData = new Data();
        _super.prototype.init.call(this, this);
    }
    product.prototype.load = function () {
        var d = $.Deferred();
        this.appData.productDataSource.read().then(function () {
            d.resolve("products");
        });
        return d.promise();
    };
    product.prototype.fetch = function (productId) {
        return this.appData.productDataSource.get(productId);
    };
    return product;
}(kendo.Observable));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Observables/product.js.map