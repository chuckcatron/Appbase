///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class CustomerCustomerDemo extends kendo.data.Model {
    constructor(data?: any) {
        super();
        this.idField = "CustomerID";
        this.fields = {
            "CustomerTypeID": { type: "string" }
        }
        super.init(data);
    }
}