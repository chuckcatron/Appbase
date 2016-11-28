/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class contact extends kendo.data.ObservableObject {
    appData: Data;
    load: () => JQueryPromise<{}>;
    fetch: (contactId: any) => kendo.data.Model;
    constructor();
}
