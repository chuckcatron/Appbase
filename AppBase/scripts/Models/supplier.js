var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Supplier = (function (_super) {
    __extends(Supplier, _super);
    function Supplier(data) {
        _super.call(this);
        this.idField = "SupplierID";
        this.fields = {
            "CompanyName": { type: "string" },
            "ContactName": { type: "string" },
            "ContactTitle": { type: "string" },
            "Address": { type: "string" },
            "City": { type: "string" },
            "Region": { type: "string" },
            "PostalCode": { type: "string" },
            "Country": { type: "string" },
            "Phone": { type: "string" },
            "Fax": { type: "string" },
            "HomePage": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return Supplier;
}(kendo.data.Model));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/supplier.js.map