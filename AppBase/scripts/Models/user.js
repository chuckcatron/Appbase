var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
var User = (function (_super) {
    __extends(User, _super);
    function User(data) {
        _super.call(this);
        this.idField = "EmployeeId";
        this.fields = {
            "EmployeeFirstName": { type: "string" },
            "EmployeeLastName": { type: "string" },
            "Name": { type: "string" },
            "PIC": { type: "string" },
            "UnrestrictedViewer": { type: "bool" },
            "Application": { type: "bool" },
            "Viewer": { type: "bool" },
            "ConnectionId": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    User.prototype.fullName = function () {
        //return this.get("EmployeeFirstName") + " " + this.get("EmployeeLastName");
        return "Chuck Catron";
    };
    User.prototype.hasAccess = function () {
        return true;
        //return this.get("MA09UnrestrictedViewer") || this.get("MA09Application") || this.get("MA09Viewer");
    };
    User.prototype.canUpdate = function () {
        return true;
        //return this.get("MA09UnrestrictedViewer") || this.get("MA09Application");
    };
    return User;
}(kendo.data.Model));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Models/user.js.map