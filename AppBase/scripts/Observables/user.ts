/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
class user extends kendo.data.ObservableObject{
    Data = new User();
    _getUser() {
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
    }
}