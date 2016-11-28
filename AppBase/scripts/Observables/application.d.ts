/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class application extends kendo.data.ObservableObject {
    main: main;
    common: Common;
    appData: Data;
    View: string;
    Model: string;
    load: (page: any, id?: any) => void;
    getPage: (page: any) => JQueryPromise<{}>;
    buildView: (view: any) => JQueryPromise<{}>;
    loadComplete: (path: any, model: any) => void;
    loadPage: (url: any) => JQueryPromise<{}>;
    loadSection: (section: any) => JQueryPromise<{}>;
    navbarClick: () => void;
    buildNav: () => JQueryPromise<{}>;
    loadNoAccess: () => void;
}
