/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
declare class user extends kendo.data.ObservableObject {
    Data: User;
    _getUser(): JQueryPromise<{}>;
}
