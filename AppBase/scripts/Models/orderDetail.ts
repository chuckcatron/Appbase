///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class OrderDetail extends kendo.data.Model{
    constructor(data?: any) {
        super();
        this.idField = "OrderId";
        this.fields = {
            "ProductID": { type: "number" },
            "UnitPrice": { type: "number" },
            "Quantity": { type: "number" },
            "Discount": { type: "number" }
        };
        super.init(data);
    }
}