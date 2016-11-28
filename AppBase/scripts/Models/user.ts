/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
class User extends kendo.data.Model{
    constructor(data?: any) {
        super();
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
        super.init(data);
    }
    
    fullName() {
        //return this.get("EmployeeFirstName") + " " + this.get("EmployeeLastName");
        return "Chuck Catron";
    }

    hasAccess() {
        return true;
        //return this.get("MA09UnrestrictedViewer") || this.get("MA09Application") || this.get("MA09Viewer");
    }

    canUpdate() {
        return true;
        //return this.get("MA09UnrestrictedViewer") || this.get("MA09Application");
    }
}