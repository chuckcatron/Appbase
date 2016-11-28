///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var product = (function (_super) {
    __extends(product, _super);
    function product() {
        var _this = this;
        _super.call(this);
        this.application = new application();
        this.main = this.application.main;
        this.Product = this.application.main.product.Product;
        this.load = function () {
            var self = _this;
            var d = $.Deferred();
            self.main.productDS.read().then(function () {
                d.resolve("products");
            });
            return d.promise();
        };
        this.fetch = function (productId) {
            var self = _this;
            return self.main.productDS.get(productId);
        };
        _super.prototype.init.call(this, this);
    }
    return product;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/product.js.map