///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Employee extends kendo.data.Model {
    constructor(data?: any) {
        super();
        this.idField = "EmployeeID";
        this.fields = {
            "LastName": { type: "string" },
            "FirstName": { type: "string" },
            "FullName": { type: "string" },
            "Title": { type: "string" },
            "TitleOfCourtesy": { type: "string" },
            "BirthDate": { type: "date" },
            "HireDate": { type: "date" },
            "Address": { type: "string" },
            "City": { type: "string" },
            "Region": { type: "string" },
            "PostalCode": { type: "string" },
            "Country": { type: "string" },
            "HomePhone": { type: "string" },
            "Extension": { type: "string" },
            "Notes": { type: "string" },
            "ReportsTo": { type: "number" },
            "PhotoPath": { type: "string" }
        };
        super.init(data);
    }

    fill = () => {
        try {
            var self = this;
            self.set("FullName", self.get("LastName") + ", " + self.get("FirstName"));
            return self;
        }
        catch (err) { throw err; }
    }
}