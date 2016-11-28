///<reference path="typings/kendo-ui/kendo-ui.d.ts"/>
///<reference path="typings/toastr/toastr.d.ts"/>
var Data = (function () {
    function Data() {
        var _this = this;
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
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        products.push(new Product(response.Data[i]));
                    }
                    return products;
                },
                total: function () {
                    return this.total;
                },
                model: product
            }
        });
        this.categoryDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allcategories",
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
            schema: {
                parse: function (response) {
                    var categories = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        categories.push(new Category(response.Data[i]));
                    }
                    return categories;
                },
                total: function () {
                    return _this.total;
                },
                model: Category
            }
        });
        this.supplierDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allsuppliers",
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
            schema: {
                parse: function (response) {
                    var suppliers = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        suppliers.push(new Supplier(response.Data[i]));
                    }
                    return suppliers;
                },
                total: function () {
                    return _this.total;
                },
                model: Supplier
            }
        });
        this.contactDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allcontacts",
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
            schema: {
                parse: function (response) {
                    var contacts = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        contacts.push(new Contact(response.Data[i]));
                    }
                    return contacts;
                },
                total: function () {
                    return this.total;
                },
                model: Contact
            }
        });
        this.customerDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allcustomers",
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
            schema: {
                parse: function (response) {
                    var customers = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        customers.push(new Customer(response.Data[i]));
                    }
                    return customers;
                },
                total: function () {
                    return this.total;
                },
                model: Customer
            }
        });
        this.orderDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allorders",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: function (response) {
                    var orders = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        orders.push(new Order(response.Data[i]));
                    }
                    return orders;
                },
                total: function () {
                    return this.total;
                },
                model: Order
            }
        });
        this.employeeDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allemployees",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            sort: { field: "LastName", dir: "asc" },
            schema: {
                parse: function (response) {
                    var list = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Employee(response.Data[i]).fill());
                    }
                    return list;
                },
                total: function () {
                    return _this.total;
                },
                model: Employee
            }
        });
        this.employeeListDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allemployees",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            serverPaging: false,
            serverSorting: false,
            sort: { field: "LastName", dir: "asc" },
            schema: {
                parse: function (response) {
                    var list = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Employee(response.Data[i]).fill());
                    }
                    return list;
                },
                total: function () {
                    return this.total;
                },
                model: Employee
            }
        });
        this.shipperDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allshippers",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: function (response) {
                    var list = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Shipper(response.Data[i]).fill());
                    }
                    return list;
                },
                total: function () {
                    return _this.total;
                },
                model: Shipper
            }
        });
        this.shipperListDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allshippers",
                    contentType: "application/json"
                }
            },
            requestStart: function (e) {
                loader.show();
            },
            error: function (e) {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            serverPaging: false,
            serverFiltering: false,
            serverSorting: false,
            sort: { field: "CompanyName", dir: "asc" },
            schema: {
                parse: function (response) {
                    var items = [];
                    _this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        items.push(new Shipper(response.Data[i]));
                    }
                    return items;
                },
                total: function () { return _this.total; },
                model: Shipper
            }
        });
    }
    return Data;
}());
//# sourceMappingURL=C:/Users/charl/Source/Repos/Appbase/AppBase/scripts/scripts/data.js.map