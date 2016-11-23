///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Order extends kendo.data.Model {
    constructor(data?: any) {
        super();
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
        super.init(data);
    }

    fill =() => {
        try {
            var self = this;
            self.set("OrderDate", kendo.toString(self.get("OrderDate"), "MM/dd/yyyy"));
            self.set("RequiredDate", kendo.toString(self.get("RequiredDate"), "MM/dd/yyyy"));
            self.set("ShippedDate", kendo.toString(self.get("ShippedDate"), "MM/dd/yyyy"));
            return self;
        } catch (err) {
            throw err;
        }
    }

    pack=() => {
        try {
            var self = this;
            self.set("OrderDate", new Date(self.get("OrderDate")).toISOString());
            self.set("RequiredDate", new Date(self.get("RequiredDate")).toISOString());
            self.set("ShippedDate", new Date(self.get("ShippedDate")).toISOString());
            return self.toJSON();
        } catch (err) {
            throw err;
        }
    }
}