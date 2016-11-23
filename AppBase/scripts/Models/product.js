var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Product = (function (_super) {
    __extends(Product, _super);
    function Product(data) {
        _super.call(this);
        this.idField = "ProductID";
        this.fields = {
            "ProductName": { type: "string" },
            "SupplierID": { type: "number" },
            "CategoryID": { type: "number" },
            "QuantityPerUnit": { type: "string" },
            "UnitPrice": { type: "number" },
            "UnitsInStock": { type: "number" },
            "UnitsOnOrder": { type: "number" },
            "ReorderLevel": { type: "number" },
            "Discontinued": { type: "boolean" }
        };
        _super.prototype.init.call(this, data);
    }
    return Product;
}(kendo.data.Model));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/product.js.map