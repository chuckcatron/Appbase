///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Supplier extends kendo.data.Model {
    constructor(data?: any) {
        super();
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
        super.init(data);
    }
}