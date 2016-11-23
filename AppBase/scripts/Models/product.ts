///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Product extends kendo.data.Model {
    constructor(data?: any) {
        super();
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
        }
        super.init(data);
    }
}