///<reference path="typings/kendo-ui/kendo-ui.d.ts"/>
///<reference path="typings/toastr/toastr.d.ts"/>

class Data {
    total: number;

    productDataSource: kendo.data.DataSource;
    categoryDataSource: kendo.data.DataSource;
    supplierDataSource: kendo.data.DataSource;
    contactDataSource: kendo.data.DataSource;
    customerDataSource: kendo.data.DataSource;
    orderDataSource: kendo.data.DataSource;
    employeeDataSource: kendo.data.DataSource;
    employeeListDataSource: kendo.data.DataSource;
    shipperDataSource: kendo.data.DataSource;
    shipperListDataSource: kendo.data.DataSource;

    constructor() {
        this.productDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "api/allproducts",
                    contentType: "application/json"
                }
            },
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: response => {
                    var products = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        products.push(new Product(response.Data[i]));
                    }
                    return products;
                },
                total: function() {
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            schema: {
                parse: response => {
                    var categories = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        categories.push(new Category(response.Data[i]));
                    }
                    return categories;
                },
                total: () => {
                    return this.total;
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            schema: {
                parse: response => {
                    var suppliers = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        suppliers.push(new Supplier(response.Data[i]));
                    }
                    return suppliers;
                },
                total: () => {
                    return this.total;
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            schema: {
                parse: response => {
                    var contacts = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        contacts.push(new Contact(response.Data[i]));
                    }
                    return contacts;
                },
                total: function() {
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                alert("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            schema: {
                parse: response => {
                    var customers = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        customers.push(new Customer(response.Data[i]));
                    }
                    return customers;
                },
                total() {
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: response => {
                    var orders = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        orders.push(new Order(response.Data[i]));
                    }
                    return orders;
                },
                total: function() {
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            sort: { field: "LastName", dir: "asc" },
            schema: {
                parse: response => {
                    var list = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Employee(response.Data[i]).fill());
                    }
                    return list;
                },
                total: () => {
                    return this.total;
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            serverPaging: false,
            serverSorting: false,
            sort: { field: "LastName", dir: "asc" },
            schema: {
                parse: response => {
                    var list = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Employee(response.Data[i]).fill());
                    }
                    return list;
                },
                total: function() {
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            pageSize: 15,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            schema: {
                parse: response => {
                    var list = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        list.push(new Shipper(response.Data[i]).fill());
                    }
                    return list;
                },
                total: () => {
                    return this.total;
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
            requestStart: e => {
                loader.show();
            },
            error: e => {
                // handle data operation error
                toastr.error("Status: " + e.status + "; Error message: " + e.errorThrown);
            },
            serverPaging: false,
            serverFiltering: false,
            serverSorting: false,
            sort: { field: "CompanyName", dir: "asc" },
            schema: {
                parse: response => {
                    var items = [];
                    this.total = response.Total;
                    for (var i = 0; i < response.Data.length; i++) {
                        items.push(new Shipper(response.Data[i]));
                    }
                    return items;
                },
                total: () => this.total,
                model: Shipper
            }
        });
    }

    loadSingleOrder = orderid => {
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

    saveOrder = o => {
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
    };

    deleteOrder = o => {
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
    };
}