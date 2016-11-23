///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Shipper extends kendo.data.Model {
    constructor(data ?: any) {
        super();
        this.idField = "ShipperID";
        this.fields = {
            "CompanyName": { type: "string" },
            "Phone": { type: "string" }
        }
        super.init(data);
    }

    fill = () => {
        try {
            var self = this;
            return self;
        } catch (err) {
            throw err;
        }
    }
}