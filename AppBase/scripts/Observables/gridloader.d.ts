/// <reference path="../typings/kendo-ui/kendo-ui.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
declare class gridLoader extends kendo.Observable {
    docHeight: number;
    initialize: () => void;
    show: () => void;
    hide: () => void;
    constructor();
}
