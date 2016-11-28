///<reference path="../typings/kendo-ui/kendo-ui.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts" />
class main extends kendo.data.ObservableObject{
    //child observables
    product: product;
    supplier: supplier;
    category: category;
    contact: contact;
    order: order;
    shipper: shipper;
    user: user;

    //home page data
    productStatistic:number = 0;
    supplierStatistic: number = 0;
    contactStatistic: number = 0;
    orderStatistic: number = 0;
    employeeStatistic: number = 0;
    loadStatistic = (key, value) => {
        this.set(key, value);
    }

    //DataSources
    appData = new Data();
    customerDS = this.appData.customerDataSource;
    employeeDS = this.appData.employeeDataSource;
    employeeListDS = this.appData.employeeListDataSource;
    orderDS = this.appData.orderDataSource;
    productDS = this.appData.productDataSource;
    shipperDS = this.appData.shipperDataSource;
    shipperListDS = this.appData.shipperListDataSource;
    supplierDS = this.appData.supplierDataSource;

    constructor() {
        super();
        super.init();
    }
}