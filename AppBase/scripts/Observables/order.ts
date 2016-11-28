///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
class order extends kendo.data.ObservableObject{
    application: application = new application();
    main: main = this.application.main;
    Order: Order = this.main.order.Order;

    load = () => {
        var self = this;
        var d = $.Deferred();
        self.main.orderDS.read().then(function () {
            d.resolve("orders");
        });
        return d.promise();
    }
    
    fetch = (orderId) => {
        var self = this;
        $.when(self._loadSingleOrder(orderId)).done(function (o) {
            self.set("Order", new Order(o).fill());
        });
    }

    loadComplete = (e) => {
        toastr.success("Load complete");
        kendo.bind($("#ordersGrid").find(".k-grid-toolbar"), order);
    }

    editOrder = (e) => {
        var self = this;
        toastr.success("Edit order");
        var id = e.data.OrderID;
        self.application.load("orderedit", id);
    }

    deleteOrder = (e) => {
        var self = this;
        toastr.success("Delete order");
        var id = e.data.OrderID;
        self._deleteOrder(id).done(function () {
            self.application.load("orderlist");
        });
    }

    addOrder = (e) => {
        var self = this;
        self.Order = new Order();
        self.application.load("orderedit");
    }

    save = () => {
        var self = this;
        toastr.success("Save order");
        var o = self.Order.pack();
        self._saveOrder(o).done(function () {
            self.application.load("orderlist");
        });
    }

    cancel = () => {
        var self = this;
        toastr.success("Cancel order");
        self.application.load("orderlist");
    }

    private _loadSingleOrder = orderid => {
        var d = $.Deferred();
        $.ajax("api/order/" + orderid)
            .done(result => {
                d.resolve(result.order);
            })
            .fail(error => {
                alert("error");
            });
        return d.promise();
    }

    private _saveOrder = o => {
        var d = $.Deferred(), data = o;
        $.ajax({
            method: "PUT",
            url: "api/order/update",
            data: data
        })
            .done(() => {
                toastr.success("Update complete");
                d.resolve();
            })
            .fail(result => {
                toastr.error("Order Update Error: " + result.statusText);
                d.reject();
            });
        return d.promise();
    }

    private _deleteOrder = o => {
        var d = $.Deferred();
        $.ajax({
            method: "PUT",
            url: "api/order/remove/" + o
        })
            .done(() => {
                toastr.success("Delete complete");
                d.resolve();
            })
            .fail(result => {
                toastr.error("Order Delete Error: " + result.statusText);
                d.reject();
            });
        return d.promise();
    }

    constructor() {
        super();
        super.init();
    }
}