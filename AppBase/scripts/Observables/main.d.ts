/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class main extends kendo.data.ObservableObject {
    product: product;
    supplier: supplier;
    category: category;
    contact: contact;
    order: order;
    shipper: shipper;
    user: user;
    productStatistic: number;
    supplierStatistic: number;
    contactStatistic: number;
    orderStatistic: number;
    employeeStatistic: number;
    loadStatistic: (key: any, value: any) => void;
    appData: Data;
    customerDS: kendo.data.DataSource;
    employeeDS: kendo.data.DataSource;
    employeeListDS: kendo.data.DataSource;
    orderDS: kendo.data.DataSource;
    productDS: kendo.data.DataSource;
    shipperDS: kendo.data.DataSource;
    shipperListDS: kendo.data.DataSource;
    supplierDS: kendo.data.DataSource;
    constructor();
}
