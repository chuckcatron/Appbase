///<reference path="typings/kendo-ui/kendo-ui.d.ts"/>
var Data = (function () {
    function Data() {
        this.productDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allproducts",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: function (response) {
                    var products = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        products.push(new product(response.Data[i]));
                    }
                    return products;
                },
                total: function () {
                    return this.total;
                },
                model: product
            }
        });
    }
    return Data;
}());
//# sourceMappingURL=C:/Development/Typescript/AppBase/AppBase/scripts/scripts/data.js.map