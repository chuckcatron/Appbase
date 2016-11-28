var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var category = (function (_super) {
    __extends(category, _super);
    function category() {
        var _this = this;
        _super.call(this);
        this.appData = new Data();
        this.load = function () {
            var d = $.Deferred();
            _this.appData.categoryDataSource.read().then(function () {
                d.resolve("categories");
            });
            return d.promise();
        };
        this.fetch = function (categoryId) {
            return _this.appData.categoryDataSource.get(categoryId);
        };
        _super.prototype.init.call(this, this);
    }
    return category;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/category.js.map