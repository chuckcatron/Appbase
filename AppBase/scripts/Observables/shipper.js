var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
var shipper = (function (_super) {
    __extends(shipper, _super);
    function shipper() {
        var _this = this;
        _super.call(this);
        this.application = new application();
        this.main = this.application.main;
        this.Shipper = this.main.shipper.Shipper;
        this.load = function () {
            var d = $.Deferred(), self = _this;
            self.main.shipperDS.read().then(function () {
                d.resolve("shippers");
            });
            return d.promise();
        };
        this.fetch = function (shipperId) {
            var self = _this;
            $.when(self._loadSingleShipper(shipperId)).done(function (o) {
                self.set("Shipper", new Shipper(o).fill());
            });
        };
        this.loadComplete = function (e) {
            var self = _this;
            toastr.success("Load complete");
            kendo.bind($("#shippersGrid").find(".k-grid-toolbar"), self);
        };
        this.editShipper = function (e) {
            var self = _this;
            toastr.success("Edit shipper");
            var id = e.data.ShipperID;
            self.application.load("shipperedit", id);
        };
        this.deleteShipper = function (e) {
            var self = _this;
            toastr.success("Delete shipper");
            var id = e.data.ShipperID;
            self._deleteShipper(id).done(function () {
                self.application.load("shipperlist");
            });
        };
        this.addShipper = function (e) {
            var self = _this;
            self.Shipper = new Shipper();
            self.application.load("shipperedit");
        };
        this.save = function () {
            var self = _this;
            toastr.success("Save shipper");
            var o = self.Shipper.pack();
            self._saveShipper(o).done(function () {
                self.application.load("shipperlist");
            });
        };
        this.cancel = function () {
            var self = _this;
            toastr.success("Cancel shipper");
            self.application.load("shipperlist");
        };
        this._loadSingleShipper = function (id) {
            var d = $.Deferred();
            $.ajax("api/shipper/" + id)
                .done(function (result) {
                d.resolve(result.shipper);
            })
                .fail(function (error) {
                alert("error");
            });
            return d.promise();
        };
        this._saveShipper = function (o) {
            var d = $.Deferred(), data = o;
            $.ajax({
                method: "PUT",
                url: "api/shipper/update",
                data: data
            }).done(function () {
                toastr.success("Update complete");
                d.resolve();
            }).fail(function (result) {
                toastr.error("Shipper Update Error: " + result.statusText);
                d.reject();
            });
            return d.promise();
        };
        this._deleteShipper = function (o) {
            var d = $.Deferred();
            $.ajax({
                method: "PUT",
                url: "api/shipper/remove/" + o
            }).done(function () {
                toastr.success("Delete complete");
                d.resolve();
            }).fail(function (result) {
                toastr.error("Shipper Delete Error: " + result.statusText);
                d.reject();
            });
            return d.promise();
        };
        _super.prototype.init.call(this);
    }
    return shipper;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/shipper.js.map