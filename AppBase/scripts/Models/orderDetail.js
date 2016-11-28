var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var OrderDetail = (function (_super) {
    __extends(OrderDetail, _super);
    function OrderDetail(data) {
        _super.call(this);
        this.idField = "OrderId";
        this.fields = {
            "ProductID": { type: "number" },
            "UnitPrice": { type: "number" },
            "Quantity": { type: "number" },
            "Discount": { type: "number" }
        };
        _super.prototype.init.call(this, data);
    }
    return OrderDetail;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/orderDetail.js.map