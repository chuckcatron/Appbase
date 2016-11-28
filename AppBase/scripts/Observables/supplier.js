var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
var supplier = (function (_super) {
    __extends(supplier, _super);
    function supplier() {
        var _this = this;
        _super.call(this);
        this.application = new application();
        this.main = this.application.main;
        this.Supplier = this.main.supplier.Supplier;
        this.load = function () {
            var self = _this;
            var d = $.Deferred();
            self.main.supplierDS.read().then(function () {
                d.resolve("suppliers");
            });
            return d.promise();
        };
        this.fetch = function (supplierId) {
            var self = _this;
            return self.main.supplierDS.get(supplierId);
        };
        _super.prototype.init.call(this);
    }
    return supplier;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/supplier.js.map