///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
class shipper extends kendo.data.ObservableObject{
    application = new application();
    main: main = this.application.main;
    Shipper: Shipper = this.main.shipper.Shipper;

    load = () => {
        var d = $.Deferred(), self = this;
        self.main.shipperDS.read().then(() => {
            d.resolve("shippers");
        });
        return d.promise();
    }

    fetch = (shipperId) => {
        var self = this;
        $.when(self._loadSingleShipper(shipperId)).done((o) => {
            self.set("Shipper", new Shipper(o).fill());
        });
    }
        
    loadComplete = (e) => {
        var self = this;
        toastr.success("Load complete");
        kendo.bind($("#shippersGrid").find(".k-grid-toolbar"), self);
    }

    editShipper = (e) => {
        var self = this;
        toastr.success("Edit shipper");
        var id = e.data.ShipperID;
        self.application.load("shipperedit", id);
    }

    deleteShipper = (e) => {
        var self = this;
        toastr.success("Delete shipper");
        var id = e.data.ShipperID;
        self._deleteShipper(id).done(function () {
            self.application.load("shipperlist");
        });
    }

    addShipper = (e) => {
        var self = this;
        self.Shipper = new Shipper();
        self.application.load("shipperedit");
    }

    save = () => {
        var self = this;
        toastr.success("Save shipper");
        var o = self.Shipper.pack();
        self._saveShipper(o).done(function () {
            self.application.load("shipperlist");
        });
    }

    cancel = () => {
        var self = this;
        toastr.success("Cancel shipper");
        self.application.load("shipperlist");
    }

    private _loadSingleShipper = (id) => {
        var d = $.Deferred();
        $.ajax("api/shipper/" + id)
            .done(function (result) {
                d.resolve(result.shipper);
            })
            .fail(function (error) {
                alert("error");
            });
        return d.promise();
    }

    private _saveShipper = (o) => {
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
    }

    private _deleteShipper = (o) => {
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
    }

    constructor() {
        super();
        super.init();
    }
}