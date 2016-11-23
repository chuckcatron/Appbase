/// <reference path="typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
declare class Loader extends kendo.data.ObservableObject {
    docHeight: any;
    init(): void;
    show(): void;
    hide(): void;
    constructor();
}
