/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class product extends kendo.data.ObservableObject {
    application: application;
    main: main;
    Product: Product;
    load: () => JQueryPromise<{}>;
    fetch: (productId: any) => kendo.data.Model;
    constructor();
}
