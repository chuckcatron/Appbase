class EmployeeTerritory extends kendo.data.Model {
    constructor(data?: any) {
        super();
        this.idField = "EmployeeID";
        this.fields = {
            "TerritoryID": { type: "number" }
        };
        super.init(data);
    }
}