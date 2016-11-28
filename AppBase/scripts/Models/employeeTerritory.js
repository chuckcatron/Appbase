var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EmployeeTerritory = (function (_super) {
    __extends(EmployeeTerritory, _super);
    function EmployeeTerritory(data) {
        _super.call(this);
        this.idField = "EmployeeID";
        this.fields = {
            "TerritoryID": { type: "number" }
        };
        _super.prototype.init.call(this, data);
    }
    return EmployeeTerritory;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/employeeTerritory.js.map