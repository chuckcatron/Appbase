var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(data) {
        var _this = this;
        _super.call(this);
        this.fill = function () {
            try {
                var self = _this;
                self.set("FullName", self.get("LastName") + ", " + self.get("FirstName"));
                return self;
            }
            catch (err) {
                throw err;
            }
        };
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
        _super.prototype.init.call(this, data);
    }
    return Employee;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/employee.js.map