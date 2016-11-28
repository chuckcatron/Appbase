/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class supplier extends kendo.data.ObservableObject {
    application: application;
    main: main;
    Supplier: Supplier;
    load: () => JQueryPromise<{}>;
    fetch: (supplierId: any) => kendo.data.Model;
    constructor();
}
