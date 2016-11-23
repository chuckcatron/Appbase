var product = kendo.data.Model.define({
    id: "ProductID",
    fields: {
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
});
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/product.js.map