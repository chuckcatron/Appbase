/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class order extends kendo.data.ObservableObject {
    application: application;
    main: main;
    Order: Order;
    load: () => JQueryPromise<{}>;
    fetch: (orderId: any) => void;
    loadComplete: (e: any) => void;
    editOrder: (e: any) => void;
    deleteOrder: (e: any) => void;
    addOrder: (e: any) => void;
    save: () => void;
    cancel: () => void;
    private _loadSingleOrder;
    private _saveOrder;
    private _deleteOrder;
    constructor();
}
