var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Region = (function (_super) {
    __extends(Region, _super);
    function Region(data) {
        _super.call(this);
        this.idField = "RegionID";
        this.fields = {
            "RegionDescription": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return Region;
}(kendo.data.Model));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/region.js.map