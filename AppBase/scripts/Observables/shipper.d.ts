/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class shipper extends kendo.data.ObservableObject {
    application: application;
    main: main;
    Shipper: Shipper;
    load: () => JQueryPromise<{}>;
    fetch: (shipperId: any) => void;
    loadComplete: (e: any) => void;
    editShipper: (e: any) => void;
    deleteShipper: (e: any) => void;
    addShipper: (e: any) => void;
    save: () => void;
    cancel: () => void;
    private _loadSingleShipper;
    private _saveShipper;
    private _deleteShipper;
    constructor();
}
