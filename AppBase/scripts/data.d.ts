/// <reference path="typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="typings/toastr/toastr.d.ts" />
declare class Data {
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
    constructor();
    loadSingleOrder: (orderid: any) => JQueryPromise<{}>;
    saveOrder: (o: any) => JQueryPromise<{}>;
    deleteOrder: (o: any) => JQueryPromise<{}>;
}
