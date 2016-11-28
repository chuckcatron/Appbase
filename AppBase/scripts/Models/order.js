var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Order = (function (_super) {
    __extends(Order, _super);
    function Order(data) {
        var _this = this;
        _super.call(this);
        this.fill = function () {
            try {
                var self = _this;
                self.set("OrderDate", kendo.toString(self.get("OrderDate"), "MM/dd/yyyy"));
                self.set("RequiredDate", kendo.toString(self.get("RequiredDate"), "MM/dd/yyyy"));
                self.set("ShippedDate", kendo.toString(self.get("ShippedDate"), "MM/dd/yyyy"));
                return self;
            }
            catch (err) {
                throw err;
            }
        };
        this.pack = function () {
            try {
                var self = _this;
                self.set("OrderDate", new Date(self.get("OrderDate")).toISOString());
                self.set("RequiredDate", new Date(self.get("RequiredDate")).toISOString());
                self.set("ShippedDate", new Date(self.get("ShippedDate")).toISOString());
                return self.toJSON();
            }
            catch (err) {
                throw err;
            }
        };
        this.idField = "OrderID";
        this.fields = {
            "CustomerID": { type: "string" },
            "EmployeeID": { type: "number" },
            "EmployeeFullname": { type: "string" },
            "OrderDate": { type: "date" },
            "RequiredDate": { type: "date" },
            "ShippedDate": { type: "date" },
            "ShipVia": { type: "number" },
            "Freight": { type: "number" },
            "ShipName": { type: "string" },
            "ShipAddress": { type: "string" },
            "ShipCity": { type: "string" },
            "ShipRegion": { type: "string" },
            "ShipPostalCode": { type: "string" },
            "ShipCountry": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return Order;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/order.js.map