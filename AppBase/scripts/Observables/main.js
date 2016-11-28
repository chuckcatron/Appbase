var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
var main = (function (_super) {
    __extends(main, _super);
    function main() {
        var _this = this;
        _super.call(this);
        //home page data
        this.productStatistic = 0;
        this.supplierStatistic = 0;
        this.contactStatistic = 0;
        this.orderStatistic = 0;
        this.employeeStatistic = 0;
        this.loadStatistic = function (key, value) {
            _this.set(key, value);
        };
        //DataSources
        this.appData = new Data();
        this.customerDS = this.appData.customerDataSource;
        this.employeeDS = this.appData.employeeDataSource;
        this.employeeListDS = this.appData.employeeListDataSource;
        this.orderDS = this.appData.orderDataSource;
        this.productDS = this.appData.productDataSource;
        this.shipperDS = this.appData.shipperDataSource;
        this.shipperListDS = this.appData.shipperListDataSource;
        this.supplierDS = this.appData.supplierDataSource;
        _super.prototype.init.call(this);
    }
    return main;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/main.js.map