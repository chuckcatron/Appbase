///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var contact = (function (_super) {
    __extends(contact, _super);
    function contact() {
        var _this = this;
        _super.call(this);
        this.appData = new Data();
        this.load = function () {
            var d = $.Deferred();
            _this.appData.contactDataSource.read().then(function () {
                d.resolve("contacts");
            });
            return d.promise();
        };
        this.fetch = function (contactId) {
            return _this.appData.contactDataSource.get(contactId);
        };
        _super.prototype.init.call(this, this);
    }
    return contact;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/contact.js.map