var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var CustomerDemographics = (function (_super) {
    __extends(CustomerDemographics, _super);
    function CustomerDemographics(data) {
        _super.call(this);
        this.idField = "CustomerTypeID";
        this.fields = {
            "CustomerDesc": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return CustomerDemographics;
}(kendo.data.Model));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/customerDemographics.js.map