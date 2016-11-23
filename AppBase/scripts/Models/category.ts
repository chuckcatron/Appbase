///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class Category extends kendo.data.Model{
    constructor(data?: any) {
        super();
        this.idField = "CategoryID";
        this.fields = {
            "CategoryName": { type: "string" },
            "Description": { type: "string" }
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

    pack = () => {
        try {
            var self = this;
            return self.toJSON();
        } catch (err) {
            throw err;
        }
    }
}