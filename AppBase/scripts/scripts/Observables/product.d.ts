/// <reference path="../../typings/kendo-ui/kendo-ui.d.ts" />
declare class Product extends kendo.Observable {
    appData: Data;
    load(): JQueryPromise<{}>;
    fetch(productId: any): kendo.data.Model;
    constructor();
}
