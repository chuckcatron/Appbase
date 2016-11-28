var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
var order = (function (_super) {
    __extends(order, _super);
    function order() {
        var _this = this;
        _super.call(this);
        this.application = new application();
        this.main = this.application.main;
        this.Order = this.main.order.Order;
        this.load = function () {
            var self = _this;
            var d = $.Deferred();
            self.main.orderDS.read().then(function () {
                d.resolve("orders");
            });
            return d.promise();
        };
        this.fetch = function (orderId) {
            var self = _this;
            $.when(self._loadSingleOrder(orderId)).done(function (o) {
                self.set("Order", new Order(o).fill());
            });
        };
        this.loadComplete = function (e) {
            toastr.success("Load complete");
            kendo.bind($("#ordersGrid").find(".k-grid-toolbar"), order);
        };
        this.editOrder = function (e) {
            var self = _this;
            toastr.success("Edit order");
            var id = e.data.OrderID;
            self.application.load("orderedit", id);
        };
        this.deleteOrder = function (e) {
            var self = _this;
            toastr.success("Delete order");
            var id = e.data.OrderID;
            self._deleteOrder(id).done(function () {
                self.application.load("orderlist");
            });
        };
        this.addOrder = function (e) {
            var self = _this;
            self.Order = new Order();
            self.application.load("orderedit");
        };
        this.save = function () {
            var self = _this;
            toastr.success("Save order");
            var o = self.Order.pack();
            self._saveOrder(o).done(function () {
                self.application.load("orderlist");
            });
        };
        this.cancel = function () {
            var self = _this;
            toastr.success("Cancel order");
            self.application.load("orderlist");
        };
        this._loadSingleOrder = function (orderid) {
            var d = $.Deferred();
            $.ajax("api/order/" + orderid)
                .done(function (result) {
                d.resolve(result.order);
            })
                .fail(function (error) {
                alert("error");
            });
            return d.promise();
        };
        this._saveOrder = function (o) {
            var d = $.Deferred(), data = o;
            $.ajax({
                method: "PUT",
                url: "api/order/update",
                data: data
            })
                .done(function () {
                toastr.success("Update complete");
                d.resolve();
            })
                .fail(function (result) {
                toastr.error("Order Update Error: " + result.statusText);
                d.reject();
            });
            return d.promise();
        };
        this._deleteOrder = function (o) {
            var d = $.Deferred();
            $.ajax({
                method: "PUT",
                url: "api/order/remove/" + o
            })
                .done(function () {
                toastr.success("Delete complete");
                d.resolve();
            })
                .fail(function (result) {
                toastr.error("Order Delete Error: " + result.statusText);
                d.reject();
            });
            return d.promise();
        };
        _super.prototype.init.call(this);
    }
    return order;
}(kendo.data.ObservableObject));
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/Observables/order.js.map