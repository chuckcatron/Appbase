var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(data) {
        _super.call(this);
        this.idField = "ContactID";
        this.fields = {
            "ContactType": { type: "string" },
            "CompanyName": { type: "string" },
            "ContactName": { type: "string" },
            "ContactTitle": { type: "string" },
            "Address": { type: "string" },
            "City": { type: "string" },
            "Region": { type: "string" },
            "PostalCode": { type: "string" },
            "Country": { type: "string" },
            "Phone": { type: "string" },
            "Extension": { type: "string" },
            "Fax": { type: "string" },
            "HomePage": { type: "string" },
            "PhotoPath": { type: "string" }
        };
        _super.prototype.init.call(this, data);
    }
    return Contact;
}(kendo.data.Model));
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/Models/contact.js.map