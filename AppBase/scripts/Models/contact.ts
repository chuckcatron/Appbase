///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Contact extends kendo.data.Model{
    constructor(data?: any) {
        super();
        this.idField = "ContactID";
        this.fields = {
            "ContactType": { type: "string" },
            "CompanyName": { type: "string" },
            "ContactName": { type: "string" },
            "ContactTitle": { type: "string" },
            "Address": { type: "string" },
            "City": { type: "string" },
            "Region": { type: "string" },
            "PostalCode": { type: "string" },
            "Country": { type: "string" },
            "Phone": { type: "string" },
            "Extension": { type: "string" },
            "Fax": { type: "string" },
            "HomePage": { type: "string" },
            "PhotoPath": { type: "string" }
        }
        super.init(data);
    }
}