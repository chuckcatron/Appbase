///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Region extends kendo.data.Model {
    constructor(data?: any) {
        super();
        this.idField = "RegionID";
        this.fields = {
            "RegionDescription": { type: "string" }
        }
        super.init(data);
    }
}