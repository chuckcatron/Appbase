///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class CustomerDemographics extends kendo.data.Model {
    constructor(data?: any) {
        super();
        this.idField = "CustomerTypeID";
        this.fields = {
            "CustomerDesc": { type: "string" }
        };
        super.init(data);
    }
}