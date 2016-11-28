/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class category extends kendo.data.ObservableObject {
    appData: Data;
    load: () => JQueryPromise<{}>;
    fetch: (categoryId: any) => kendo.data.Model;
    constructor();
}
