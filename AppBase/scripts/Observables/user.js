var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
var user = (function (_super) {
    __extends(user, _super);
    function user() {
        _super.apply(this, arguments);
        this.Data = new User();
    }
    user.prototype._getUser = function () {
        var self = this;
        var d = $.Deferred();
        $.ajax({ url: 'api/security/authenticate', cache: false })
            .done(function (data) {
            self.set("Data", new User(data));
            d.resolve();
        })
            .fail(function (error) {
            alert(error.message);
            d.reject();
        });
        return d.promise();
    };
    return user;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/user.js.map